
import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import db from '../Firebase/config';

export default function AddTodo( props ) {

    const [titleValue, setTitleValue] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      if (!titleValue & !dueDate)
        return;
      props.addTodoFunction(titleValue, dueDate);

      setTitleValue("");
      setDueDate("");
    };

    return (
      <form>
        <label>title</label>
          <input
            type="text"
            className="input"
            value={titleValue}
            onChange={e => setTitleValue(e.target.value)}
          />

        <label>Due date</label>
          <input
            type="text"
            className="input"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
          />
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

//     db.collection('todos').add({
//       todo: title,
//       description: description,
//       category: category,
//       timestamp: new Date(),
//       startDate: startDate,
//       dueDate: dueDate,
//       taskPriority: priority
//     })
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
