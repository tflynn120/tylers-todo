import React, {useState, useEffect, useRef} from 'react'
import {makeUpperCase} from '../../utility/utilityFunctions';
import Modal from 'react-bootstrap/Modal';

export default function TileItem(props) {

const [menuVisibility, setMenuVisibility] = useState(false);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const wrapperRef = useRef();


useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && wrapperRef.current.contains(event.target)){
      setMenuVisibility(false);
      console.log("inside")
        }
  };

  const removeSpaceFromString = (string) => {
    let formattedString = string
    formattedString = formattedString.substring(0, 0) + "--" + string.substring(0).replace(/ /g, '');
    return formattedString;
  }

  const activeStatusText = () => {
    let activeStatus = props.todo.activeStatus;

    if (activeStatus === "Not started "){
      return "Mark as in progress";
    }
    else if (activeStatus === "In progress") {
      return "Mark as complete";
    }
    else if (activeStatus === "Complete"){
      return "Mark as not started";
    }
  }

    return (
      <>
        <div className="tile-container__panel">
          <h2 className="tile__heading">{props.todo.title}</h2>
            <div className="tile__heading-menu" onClick={() => setMenuVisibility(true)}>
            <span>
              <span className="tile__heading-menu--circle"/>
              <span className="tile__heading-menu--circle"/>
              <span className="tile__heading-menu--circle"/>
            </span>
                {menuVisibility && (
                    <div className="tile__menu-open" ref={wrapperRef}>
                        <ul className="tile__menu-open-list">
                            <li className="tile-menu-open-list__li" onClick={()=>{props.completeTodo(props.todo.id)}}>
                                <i class="fas fa-check"/> {activeStatusText()}
                            </li>
                            <li className="tile-menu-open-list__li"><i class="far fa-edit"></i> Edit</li>
                            <li className="tile-menu-open-list__li" onClick={handleShow}>
                              <i class="far fa-trash-alt"/> Delete</li>
                        </ul>
                    </div>
                )}
            </div>
          <p className="tile__description">{props.todo.description}</p>
          <span className={`tile__category-tope ${'tile__category-tope' + removeSpaceFromString(props.todo.category)}`}>{makeUpperCase(props.todo.category)}</span>
          <span className="tile__progress-bar"/>
            <span className="tile__progress-bar--percentage"/>
          <span className="tile__days-left">2 days left</span>
      </div>

    <Modal show={show} onHide={handleClose} closeButton>
      <Modal.Title><i class="fas fa-exclamation-triangle"></i></Modal.Title>
    <Modal.Body>Delete task {props.todo.title}</Modal.Body>
      <button>Cancel</button>
      <button>Delete task</button>
      
    </Modal>
    </>
    )
}