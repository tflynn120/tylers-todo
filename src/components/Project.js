import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';


export default function Project(props) {
  console.log(props);

  let {projectItem} = props;
const [show, setShow] = useState(false);

  const handleModalOpen = () => {
    
    setShow(true);
    // setTitle(todoItem.todo);
    // setDescription(todoItem.description);
    // setstartDate(formatDatesToDefault(todoItem.start.seconds));
    // setdueDate(formatDatesToDefault(todoItem.due.seconds));
  }
  return (
<>
<Modal 
  show={show} 
  onHide={e => setShow(false)}
>

  <Modal.Header 
    closeButton>
    <Modal.Title>
      <h1>{projectItem.project}</h1>
    </Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <div className="col-12">
      <Label>Title: </Label>
  
    </div>

    <div className="col-12">
      <Label>Description: </Label>
      <Textarea
        defaultValue={projectItem.projectDescription}
        // onChange={e => setDescription(e.target.value)}
      />
    </div>

    <div className="col-12">
      {/* <Label>Start and Finish Date</Label>
      <Calendar
        selectRange
        defaultValue={[formatDatesToDefault(todoItem.start.seconds), formatDatesToDefault(todoItem.due.seconds)]}
        onChange={e => updateDates(e)}
        tileDisabled={disableWeekends}>  
      </Calendar> */}
    </div>

  </Modal.Body>

  <Modal.Footer>
    <div className="col-12">
    </div>
  </Modal.Footer>
</Modal>

<div className="row" style={{background:"grey",margin:"20px"}} >
<div className="col-md-11" onClick={handleModalOpen}>
  <h1>{projectItem.project}</h1>
  <p>{projectItem.projectDescription}</p>
  <ul>
    {/* {projectItem.testArray.map((individualListItem => (
      <li>{individualListItem[1]}</li>
    )))
    } */}

  </ul>
</div>

<div className="col-md-1">
  {/* <button onClick={e => setShow(true)}>Edit</button> */}
  {/* <button onClick={e => deleteTodo(todoItem)}>Remove</button> */}
</div>
</div>

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

const Button = styled.button`
  font-size:16px;
  background-color:cream;
  bottom: 0;
  position: absolute;
  right: 0;
  margin-bottom: 20px;
`;

const ModalRow = styled.div`
  display:block;
  background: grey;
  height:600px;
`;
