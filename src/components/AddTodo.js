
import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import db from '../Firebase/config';
import {disableWeekends, daysToCompleteTask, setDates} from '../utility/utilityFunctions';

export default function AddTodo( props ) {

    const [titleValue, setTitleValue] = useState("");
    const [category, setCategory] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [activeStatus, setActiveStatus] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!titleValue & !dueDate)
        return;
      props.addTodoFunction(titleValue, startDate, dueDate, category, activeStatus, description);
      stateCleanup()
    };

    const stateCleanup = () => {
      setTitleValue("");
      setStartDate("");
      setDueDate("");
      setCategory("");
      setActiveStatus("");
      setDescription("");

      //ask sam how to do this in utility
    }

 

    // const formatDatesToDefault = (dateItem) => {
    //   const newDueDate = new Date(dateItem * 1000);
  
    //   var month = newDueDate.getUTCMonth() + 1; //months from 1-12
    //   var day = newDueDate.getUTCDate();
    //   var year = newDueDate.getUTCFullYear();
  
    //   const newdate = year + " " + month + " " + day;
    //   return new Date(newdate);
    // }

  // const disableWeekends = ({activeStartDate, date, view }) =>
  //   date.getDay() === 0 || date.getDay() === 6;

  // disableWeekends;

  // const setDates = (e) => {
  //   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //   setStartDate(new Date(e[0]).toLocaleDateString(undefined, options));
  //   setDueDate(new Date(e[1]).toLocaleDateString(undefined, options));
  // }

  // const calculateTimeRemaining = () => {
  //   console.log("it ran");
  //   const diffInMs   = new Date(dueDate) - new Date(startDate)
  //   let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  //   diffInDays = diffInDays.toFixed(0)
  //   return diffInDays;
  // }

    return (
      <form>
        <label>Title: </label>
          <input
            type="text"
            className="input"
            value={titleValue}
            onChange={e => setTitleValue(e.target.value)}
          />

        <label>Description: </label>
        <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>

        
        <label>Type of skill</label>

        <form required
          as="select"
          onChange={e => setCategory(e.target.value)}>

          <input
            type="radio"
            id="Technical Skills"
            name="Skillset"
            value="Technical Skills"/>

          <label
            for="Technical Skills">Technical Skills
          </label>

          <input
            type="radio"
            id="Product Analyst"
            name="Skillset"
            value="Product Analyst"/>

          <label
            for="Product Analyst">Product Analyst
          </label>

          <input
            type="radio"
            id="AND Contribution"
            name="Skillset"
            value="AND Contribution"/>

          <label
            for="AND Contribution">AND Contribution
          </label>

          <input
            type="radio"
            id="Personal Skills"
            name="Skillset"
            value="Personal Skills"/>

          <label
            for="Personal Skills">Personal Skills
          </label>


          </form>

          <label>STATUS</label>

<form required
  as="select"
  onChange={e => setActiveStatus(e.target.value)}>

  <input
    type="radio"
    id="Not started"
    name="Skillset"
    value="Not started"/>

  <label
    for="Not started">Not started
  </label>

  <label
    for="In progress">In progress
  </label>

  <input
    type="radio"
    id="AND Contribution"
    name="Skillset"
    value="In progress"/>

  <label
    for="AND Contribution">Complete
  </label>

  <input
    type="radio"
    id="Personal Skills"
    name="Skillset"
    value="Complete"/>


  </form>
            <Calendar
                selectRange
                onChange={e => setDates(setStartDate, setDueDate, e)}
                returnValue={props.returnValue}
                tileDisabled={disableWeekends}
                required>
            </Calendar>

            <p>Number of days to complete task: {daysToCompleteTask(dueDate, startDate)}</p>

      <button onClick={handleSubmit}> add</button>
      </form>
      );

//   let [title, setTitle] = useState('');
//   let [description, setDescription] = useState('');
//   let [category, setCategory] = useState('');
//   let [dueDate, setdueDate] = useState('');
//   let [startDate, setstartDate] = useState('');
//   let [priority, setPriority] = useState('')

//   // change to const

//   // https://create-react-app.dev/docs/setting-up-your-editor/#visual-studio-code

//   //look at use-reducer

//   //create playaround branch

//   const addTodo = (e) => {
//     // if (validated === true){
//     e.preventDefault();

//     clearState();
//   }

// const clearState = () => {
//   setTitle('');
//   setDescription('');
// }



  // const { 
  //   title,
  //   description,
  //   setTitle,
  //   setDescription,
  //   setCategory,
  //   setdueDate,
  //   setstartDate,
  //   addTodoFunction
  // } = props;
  //props destructuring

  // const disableWeekends = ({activeStartDate, date, view }) =>
  //  date.getDay() === 0 || date.getDay() === 6;

  // const setDates = (e) => {
  //   setstartDate(e[0]);
  //   setdueDate(e[1]);
  // }

  return (
    <>

  {/* <Container>
    <Form
      style={{textAlign:"left"}}>
        <Row>
          <Col>
            <Form.Group >
              <Form.Label>Add Task</Form.Label>
              <Form.Control
                placeholder="Task title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
                required
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Type of skill</Form.Label>
              <Form.Control
                required
                as="select"
                onChange={e => setCategory(e.target.value)}>

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
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Priority: </Form.Label>
              <Form.Control
                required
                as="select"
                onChange={e => setPriority(e.target.value)}>

                <option
                  value="Low Priority">
                  Low
                </option>

                <option
                  value="Medium Priority">
                  Medium
                </option>

                <option
                  value="High Priority">
                  High
                </option>

              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Start and finish date</Form.Label>
                <Calendar
                selectRange
                onChange={e => setDates(e)}
                returnValue={props.returnValue}
                tileDisabled={disableWeekends}
                required>
              </Calendar>
            </Form.Group>
          </Col>

          <Col>
          <h2>Does this goal abide SMART principles?</h2>
          <ol>
            <li>Specific</li>
            <li>Measurable</li>
            <li>Attainable</li>
            <li>Relative</li>
            <li>Time Based</li>
          </ol>
          </Col>
        </Row>

        <Row>
          <Col>
            <button type="submit" onClick={addTodo}>Add Todo</button>
          </Col>
        </Row>
    </Form>
  </Container> */}
  </>
  )
}
