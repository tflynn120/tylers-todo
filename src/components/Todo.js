import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import db from '../Firebase/config';

export default function Todo(props) {

  const { todo } = props;

  const [show, setShow] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [dueDate, setdueDate] = useState('');
  // const [startDate, setstartDate] = useState('');

  // const { todoItem } = props;

  // const updateTodo = (itemID) => {
  //   // e.preventDefault();
  //   db.collection('todos').doc(itemID.id).set({
  //     todo: title,
  //     description: description,
  //     startDate: startDate,
  //     dueDate: dueDate
  //   }, { merge: true})
  // }

  // const deleteTodo = (todo) => {
  //   db.collection('todos').doc(todo.id).delete()
  // }

  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // const disableWeekends = ({activeStartDate, date, view }) =>
  //  date.getDay() === 0 || date.getDay() === 6;

  // const handleModalOpen = () => {
  //   setShow(true);
  //   setTitle(todoItem.todo);
  //   setDescription(todoItem.description);
  //   setstartDate(formatDatesToDefault(todoItem.start.seconds));
  //   setdueDate(formatDatesToDefault(todoItem.due.seconds));
  // }

  // //When Modal is open set the current state to the the values from the database //

  // const formatDatesToDefault = (dateItem) => {
  //   const newDueDate = new Date(dateItem * 1000);

  //   var month = newDueDate.getUTCMonth() + 1; //months from 1-12
  //   var day = newDueDate.getUTCDate();
  //   var year = newDueDate.getUTCFullYear();

  //   const newdate = year + " " + month + " " + day;
  //   return new Date(newdate);
  // }

  // //brings dates back to regular date format

  // const calculateTimeRemaining = () => {
  //   const firsttime = new Date(todoItem.due.seconds * 1000).toLocaleDateString(undefined, options)
  //   const secondTime = new Date(todoItem.start.seconds * 1000).toLocaleDateString(undefined, options)

  //   const diffInMs   = new Date(firsttime) - new Date(secondTime)
  //   const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  //   return diffInDays;
  // }

  // const updateDates = (e) =>{
  //   setstartDate(e[0]);
  //   setdueDate(e[1]);
  // }

  // const handleUpdateFunction = (e) => {
  //   e.preventDefault();
  //   // read the value of the changes from the state, save the todo to firebase, save those values to the state locally
  //   updateTodo(todoItem);
  //   setShow(false);
  // }

  //  console.log(todoItem);



//    const [draftTodo, setDraftTodo] = useState()

// const clickHandler = () => {
//       updateTodo(draftTodo)
// }

// const updateTodo = (todoToUpdate) => setTodos(...todos, todoToUpdate)


  return (
    <>

  <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} onClick={setShow}>
      {todo.title}
  </div>

  <div>
    <button onClick={() => props.completeTodo(props.index)}>Complete</button>
    <button onClick={() => props.removeTodo(props.index)}>x</button>
  </div>

    <Modal
      show={show}
      onHide={e => setShow(false)}>

        <Label>Title: </Label>
          <InputField
            defaultValue={todo.title}
            // onChange={e => setNewTitle(e.target.value)}
          />
          {/* <button onClick={(e) => props.updateTodo(props.index, newTitle)}> update todo </button> */}
        <Label>Due date: </Label>
          <InputField
            defaultValue={todo.dueDate}
            // onChange={e => setTitle(e.target.value)}
          />
    </Modal>
      {/* <Modal
      >

        <Modal.Header
          closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="col-12">
            <Label>Title: </Label>
              <InputField
                defaultValue={todoItem.todo}
                onChange={e => setTitle(e.target.value)}
              />
          </div>

          <div className="col-12">
            <Label>Description: </Label>
            <Textarea
              defaultValue={todoItem.description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="col-12">
            <Label>Start and Finish Ddate</Label>
            <Calendar
              selectRange
              defaultValue={[formatDatesToDefault(todoItem.start.seconds), formatDatesToDefault(todoItem.due.seconds)]}
              onChange={e => updateDates(e)}
              tileDisabled={disableWeekends}>
            </Calendar>
          </div>

        </Modal.Body>

        <Modal.Footer>
          <div className="col-12">
            <button
              onClick={e => handleUpdateFunction(e)}>Update To do
            </button>

            <button 
              onClick={e => setShow(false)}>Close modal
            </button>
          </div>
        </Modal.Footer>
      </Modal>

    <div className="row" style={{background:"rgb(240 238 238)",margin:"20px"}}>
      <div className="col-md-8" onClick={handleModalOpen} >
        <h2>{todoItem.todo}</h2>
        <p>{todoItem.description}</p>
        <p>{todoItem.category}</p>
        <p>{calculateTimeRemaining(todoItem)} Days left</p>
      </div>

      <div className="col-md-4">
        <p>Created at: {new Date(todoItem.created.seconds * 1000).toLocaleDateString(undefined, options)}</p>
        <p>Start Date: {new Date(todoItem.start.seconds * 1000).toLocaleDateString(undefined, options)}</p>
        <p>Due Date: {new Date(todoItem.due.seconds * 1000).toLocaleDateString(undefined, options)}</p>
        <p>{calculateTimeRemaining(todoItem)} Days left</p>
        <button onClick={e => handleModalOpen(e)}>Edit</button>
        <button onClick={e => deleteTodo(todoItem)}>Remove</button>
      </div>
    </div> */}
    </>
  )
}

const Label = styled.label`
  display:block;
  text-align:left;
  font-size:24px;
`;

const Textarea = styled.textarea`
  display:block;
  padding-left:10px;
  width:100%;
  resize:none;
  height:100px;
`;

const InputField = styled.input`
  display:block;
  padding-left:10px;
  width:100%;
`;

// const Button = styled.button`
//   font-size:16px;
//   background-color:cream;
//   bottom: 0;
//   position: absolute;
//   right: 0;
//   margin-bottom: 20px;
// `;

const ModalRow = styled.div`
  display:block;
  background: #e0e0e0;
  height:600px;
`;

// background-color: red;
// position: relative;
// float: right;
// margin-bottom: 10px

// border: 1px solid red;
// background: transparent;
// position: relative;
// float: right;
// margin-bottom: 10px;
// color: red;
// margin-right: 10px;