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
import Feedback from './components/Feedback';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (title, startDate, dueDate, category) => {

    const createdTodo = {
      'title': title,
      'startDate': startDate,
      'dueDate': dueDate,
      'isComplete': false,
      'category' : category
    }

    const newTodos = [...todos,  createdTodo ];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  }





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
              <Li>
                <Link to="/Feedback">Feedback</Link>
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
            
              <Route>
                <Feedback />
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
































































