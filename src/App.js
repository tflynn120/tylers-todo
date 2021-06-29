import React, {useState, useEffect} from 'react';
import './App.scss';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import db from './Firebase/config';
import Sidebar from './components/sidebar/Sidebar';
import TileItem from './components/tile/TileItem';
import Modal from 'react-bootstrap/Modal';


function App() {

  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filterActiveStatus = (todos, status) =>
    todos.filter((todoItem) => todoItem.activeStatus === status);

  const notStartedTodos = filterActiveStatus(todos, "Not started");
  const inProgressTodos = filterActiveStatus(todos, "In progress");
  const completedTodos = filterActiveStatus(todos, "Complete");

  const addTodo = (title, startDate, dueDate, category, activeStatus, description) => {

    const createdTodo = {
      'title': title,
      'startDate': startDate,
      'dueDate': dueDate,
      'activeStatus': activeStatus,
      'category' : category,
      'description' : description
    }

    const newTodos = [...todos,  createdTodo ];
    setTodos(newTodos);

    db.collection('todos').add({
      title: title,
      category: category,
      timestamp: new Date(),
      startDate: startDate,
      dueDate: dueDate,
      activeStatus: activeStatus,
      description: description

    })
  }

  const completeTodo = async (id) => {
  let statusSelector = "default";
  
    const editedTodoList = todos.map(todo => {
      if (id === todo.id) {

        if (todo.activeStatus === "Not started") {
          statusSelector = "In progress"
          return {...todo.activeStatus = "In progress", ...todos}
        }
        else if (todo.activeStatus === "In progress") {
          statusSelector = "Complete"
          return {...todo.activeStatus = "Complete", ...todos}
        }
        else if (todo.activeStatus === "Complete") {
          statusSelector = "In progress"
          return {...todo.activeStatus = "In Progress", ...todos}
        }
        return todo;
     };
    })

    try {
      await db.collection('todos').doc(id).set({
        activeStatus : statusSelector
      }, { merge: true})
    } catch (e) {
      console.error("failed to update database")
    }
  };

  const removeTodo = async (todo) => {
    const newTodos = [...todos].filter(({ id }) => id !== todo.id);
    try {
      await db.collection('todos').doc(todo.id).delete()
      setTodos(newTodos);
    } catch (e) {
      console.error("failed to save to db")
    }
  };

  const updateTodo = async (id, updatedTodo, ) => {
    const editedTodoList = todos.map(todo => {
      if (id === todo.id) {
        return {...todo, ...updatedTodo}
      }
      return todo;
    });

    setTodos(editedTodoList);

    try {
        await db.collection('todos').doc(id).set({
        title: updatedTodo.title,
        startDate : updatedTodo.startDate,
        dueDate : updatedTodo.dueDate,
        category : updatedTodo.category,
        isComplete : updatedTodo.isComplete
      }, { merge: true})
    } catch (e) {
      console.error("failed to update database")
    }
  }

// const modalFunc = () => {
//   console.log("run")
//   return (
//     <Modal show={show} />
//   )
// }

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {

    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        // description: doc.data().description,
        category: doc.data().category,
        created: doc.data().timestamp,
        startDate: doc.data().startDate,
        dueDate: doc.data().dueDate,
        activeStatus: doc.data().activeStatus,
        description: doc.data().description
      })))
    })
  }
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
    <div className="App">
      <div className="row panel-container h-100">
        <Sidebar />

        <div className="col-3 col-container-full">
          <span className="col-container__headings">Not started</span>
            <div className="col-container">
            {notStartedTodos.map((todo) => (
              <TileItem
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                />
              ))}
          </div>
        </div>

        <div className="col-3 col-container-full">
          <span className="col-container__headings">In progress</span>
            <div className="col-container">
            {inProgressTodos.map((todo) => (
              <TileItem
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                />
              ))}
            </div>
        </div>

        <div className="col-3 col-container-full">
          <button className="panel-container__add-item"
           onClick={handleShow}
           >
            <i class="fas fa-plus"/>
          </button>

          <span className="col-container__headings">Completed</span>
          <div className="col-container">
            {completedTodos.map((todo) => (
            <TileItem
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;