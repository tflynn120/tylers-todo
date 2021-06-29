import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import db from '../Firebase/config';
import { disableWeekends, daysToCompleteTask, setDates} from '../utility/utilityFunctions';

const ModalItem = () => {

    const [show, setShow] = useState('false');
    
    return (
        <Modal show={show} onHide={e => setShow(false)}>

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
    )
}