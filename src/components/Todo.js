import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import db from '../Firebase/config';
import { disableWeekends, daysToCompleteTask, setDates} from '../utility/utilityFunctions';

export default function Todo(props) {

  const {
    todo,
    completeTodo,
    removeTodo,
    updateTodo,
    index
  } = props;

  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newStartDate, setNewStartDate] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const editedTodo = {
    'title': newTitle,
    'startDate': newStartDate,
    'dueDate': newDueDate,
    'isComplete': false,
    'category' : newCategory
  }

  console.log(todo);

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

  // const formatDatesToDefault = (dateItem) => {
  //   const newDueDate = new Date(dateItem * 1000);

  //   var month = newDueDate.getUTCMonth() + 1; //months from 1-12
  //   var day = newDueDate.getUTCDate();
  //   var year = newDueDate.getUTCFullYear();

  //   const newdate = year + " " + month + " " + day;
  //   return new Date(newdate);
  // }

  // //brings dates back to regular date format

  const timeRemainingOfTask = (todoDueDate) => {
    const diffInMs   = new Date(todoDueDate) - new Date()
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    diffInDays = diffInDays.toFixed(0)
    return diffInDays;
  }

  return (
    <>
      <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} onClick={setShow}>
          {todo.title}
          {todo.category}
          <p>Start Date: {todo.startDate}</p>
          <p>End Date: {todo.dueDate}</p>
          <p>{daysToCompleteTask(todo.dueDate, todo.startDate)} Days assigned </p>
          <p>{timeRemainingOfTask(todo.dueDate)} Days till deadline</p>
      </div>

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>

        <Modal
          show={show}
          onHide={e => setShow(false)}>

            <Label>Title: </Label>
              <InputField
                defaultValue={todo.title}
                onChange={e => setNewTitle(e.target.value)}
              />

            <Calendar
                selectRange
                onChange={e => setDates(setNewStartDate, setNewDueDate, e)}
                returnValue={props.returnValue}
                tileDisabled={disableWeekends}
                defaultValue={[new Date(todo.startDate), new Date(todo.dueDate)]}
                required>
            </Calendar>

            <button onClick={() => { updateTodo(index, editedTodo); setShow(false)}}> update todo </button>

        </Modal>

    {/* <div className="row" style={{background:"rgb(240 238 238)",margin:"20px"}}>
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