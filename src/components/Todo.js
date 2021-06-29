import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import Calendar from 'react-calendar';
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
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newStartDate, setNewStartDate] = useState(todo.startDate);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate);
  const [newCategory, setNewCategory] = useState(todo.category);


  const editedTodo = {
    'title': newTitle,
    'startDate': newStartDate,
    'dueDate': newDueDate,
    'isComplete': false,
    'category' : newCategory
  }

  const timeRemainingOfTask = (todoDueDate) => {
    const diffInMs   = new Date(todoDueDate) - new Date()
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    diffInDays = diffInDays.toFixed(0)
    return diffInDays;
  }

  return (
    <>
      <div className="todo" style={{ textDecoration: todo.isComplete ? "line-through" : "" }} onClick={setShow}>
        <h2>{todo.title}</h2>
        <p>{todo.category}</p>
        <p>Start Date: {todo.startDate}</p>
        <p>End Date: {todo.dueDate}</p>
        <p>{daysToCompleteTask(todo.dueDate, todo.startDate)} Days assigned </p>
        <p>{timeRemainingOfTask(todo.dueDate)} Days till deadline</p>
      </div>

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(todo)}>x</button>
      </div>

      <Modal
        show={show}
        onHide={e => setShow(false)}>

        <Label>Title: </Label>
          <InputField
            defaultValue={todo.title}
            onChange={e => setNewTitle(e.target.value)}
          />

        {/* <label>Type of skill</label>
          <select
            required
            as="select"
            defaultValue={todo.category}
            onChange={e => setNewCategory(e.target.value)}>

          <option
            value=""
            selected
            disabled=>
            Select category
          </option>

          <option
            value="Technical Skills">
            Technical Skills
          </option>

          <option
            value="Product Analyst Skills">
            Product Analyst Skills
          </option>

          <option
            value="AND Contributions">
            AND Contributions
          </option>

          <option
            value="Personal">
            Personal
          </option>
        </select> */}


        <Calendar
          selectRange
          onChange={e => setDates(setNewStartDate, setNewDueDate, e)}
          returnValue={props.returnValue}
          tileDisabled={disableWeekends}
          defaultValue={[new Date(todo.startDate), new Date(todo.dueDate)]}
          required>
        </Calendar>

        <button onClick={(e) => { updateTodo(todo.id, editedTodo); setShow(false)}}> update todo </button>
        <button onClick={() => setShow(false)}> Close</button>
      </Modal>
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