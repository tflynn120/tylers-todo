import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Todo from './components/Todo';
import db from './Firebase/config';
import styled from 'styled-components';
import AddTodo from './components/AddTodo';
import Project from './components/Project';
import AddProjects from './components/AddProjects';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


function App() {

  const [todos, setTodos] = useState([
    {
      title: "Learn about React",
      isCompleted: false,
      dueDate: "20.02.2020"
    },
    {
      title: "Meet friend for lunch",
      isCompleted: false,
      dueDate: "20.02.2020"
    },
    {
      title: "Build really cool todo app",
      isCompleted: false,
      dueDate: "20.02.2020"
    }
  ]);
  // const [todos, setTodos] = useState([]);
  // const [projects, setProjects] = useState([]);


// function Todo({ todo, index, CompleteTodo }) {
//   return (
//     <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
//       {todo.title}

//         <div>
//           <button onClick={() => completeTodo(index)}>Complete</button>
//           <button onClick={() => removeTodo(index)}>x</button>
//         </div>
//     </div>
//   );
// };

  const addTodo = (title, dueDate) => {

    const createdTodo = {
      'title': title,
      'dueDate': dueDate,
      'isComplete': false
    }

    const newTodos = [...todos,  createdTodo ];
    setTodos(newTodos);
  }
  const completeTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  const updateTodo = (i, newTitle) => {

    if (!newTitle)
      return;
    const newTodos = [...todos];
    newTodos[i].title = newTitle;
    setTodos(newTodos);
  };

  // useEffect(() => {
  //   let isCancelled = false;
  //   if (!isCancelled) {


  //     //get from firebase on first load, then onwards get from state


  //     // pull state in 
  //   db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  //     setTodos(snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       todo: doc.data().todo,
  //       description: doc.data().description,
  //       category: doc.data().category,
  //       created: doc.data().timestamp,
  //       start: doc.data().startDate,
  //       due: doc.data().dueDate

  //     })))
  //     //go through every single doc, get the todo field, and set that using setTodos
  //   })

  //   db.collection('projects').onSnapshot(snapshot => {
  //     setProjects(snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       project: doc.data().project,
  //       projectDescription: doc.data().projectDescription,
  //       testArray: doc.data().test

  //     })))
  //     //go through every single doc, get the todo field, and set that using setTodos
  //   })
  // }
  //   return () => {
  //     isCancelled = true;
  //   };
  // }, []);


  // console.log(todos);


  // const deleteTodo = (todo) => {
  //   db.collection('todos').doc(todo.id).delete()
  // }

  return (
    <>
    <div className="App row">
      <div className="col-12" style={{width:"100%", height:"30px", background:"white"}}>
        <Router>
          <nav>
            <Ul style={{position:"relative"}}>
              <Li>
                <Link to="/Home">Home</Link>
              </Li>
            </Ul>
          </nav>
          <Container>
            <Switch>
              <Route>
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
































































