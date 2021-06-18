import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Todo from './components/Todo';
import db from './Firebase/config';
import styled from 'styled-components';
import AddTodo from './components/AddTodo';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Feedback from './components/Feedback';
import Sidebar from './components/sidebar/Sidebar';
import TileItem from './components/tile/TileItem';


function App() {

  const [todos, setTodos] = useState([]);
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
      description: description,
      // taskPriority: priority
      // description: description,

    })
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = (!newTodos[index].isComplete);
    setTodos(newTodos);
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
      //go through every single doc, get the todo field, and set that using setTodos
    })
    console.log("ran");
    // db.collection('projects').onSnapshot(snapshot => {
    //   setProjects(snapshot.docs.map(doc => ({
    //     id: doc.id,
    //     project: doc.data().project,
    //     projectDescription: doc.data().projectDescription,
    //     testArray: doc.data().test

    //   })))
    //   //go through every single doc, get the todo field, and set that using setTodos
    // })
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

            {todos.filter(todo => todo.activeStatus == "Not started").map(todo => (
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

            {todos.filter(todo => todo.activeStatus == "In progress").map(todo => (
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
        <button className="panel-container__add-item">
          <i class="fas fa-plus"/>
        </button>

        <span className="col-container__headings">Completed</span>
        <div className="col-container">

          {todos.filter(todo => todo.activeStatus == "Complete").map(todo => (
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
      <div className="col-12">
        <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">todos</Link>
            </li>
            <li>
              <Link to="/addTodos">Add todos</Link>
            </li>
          </ul>
        </nav> */}

          <Container>
            <Switch>
              {/* <Route path="/todos">
                {todos.isComplete ? "" :
              <>
                <h2>Active Todos</h2>
                {todos.map((todo) => (
                  <Todo
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                  />
                ))}
                </>
              }

            <h2>Completed Todos</h2>
              {/* {todos.isComplete ?
              <>
                {todos.map((todo, index) => (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                  />
                ))}
                </>
                : ""
              } */}
              {/* </Route> */}

              <Route path="/feedback">
                <Feedback />
              </Route>

              <Route path="/addTodos">
                <AddTodo addTodoFunction={addTodo} />
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    </div>
    </>
  );
}

const Li = styled.li`
  display: inline;
  font-size:18px;
  color: red;
  padding-right: 20px;
`;

const Ul = styled.ul`
text-align: left;
display: inherit;
`;

export default App;
































































