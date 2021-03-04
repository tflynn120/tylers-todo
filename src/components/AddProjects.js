import React, {useState} from 'react'
import db from '../Firebase/config';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function AddProjects() {

  // let [name, setName] = useState('');
  // let [description, setDescription] = useState('');

  // const testArrayItem = ['dog', 'cat', 'bird']
  // const addProject = () => {

  //   db.collection('projects').add({
  //     project: name,
  //     projectDescription: description,
  //     testArray: testArrayItem
  //   })

  // }
  // console.log(name);
  return (
<>
    {/* <Container>
    <Form
      style={{textAlign:"left"}} 
      >
        <Row>
          <Col>
            <Form.Group >
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                required 
                placeholder="Client Name"
                value={name} 
                onChange={e => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a title
            </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Project Description</Form.Label>
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
              <Form.Label>Product Analyst Skills</Form.Label>
              <li contentEditable="true"> </li>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>

    <div>
        <button onClick={addProject}>Add Project</button>
        <p>Project add</p>
    </div> */}
    </>
  )
}
