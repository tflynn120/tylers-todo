import React, {useState, useEffect, useRef} from 'react'
import {makeUpperCase} from '../../utility/utilityFunctions';


export default function TileItem(props) {
    
const [menuVisibility, setMenuVisibility] = useState(false);
const wrapperRef = useRef()


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


    return (
        <div className="panel-container__panel">
        <h2 className="panel__heading">{props.todo.title}</h2>
        <div className="panel__heading-menu" onClick={() => setMenuVisibility(true)}>
        <span>
          <span className="panel__heading-menu--circle"/>
          <span className="panel__heading-menu--circle"/>
          <span className="panel__heading-menu--circle"/>
        </span>
            {menuVisibility && (
                <div className="panel__menu-open" ref={wrapperRef}>
                    <ul className="panel__menu-open-list">
                        <li className="panel-menu-open-list__li"><i class="fas fa-check"></i> Mark as complete</li>
                        <li className="panel-menu-open-list__li"><i class="far fa-edit"></i> Edit</li>
                        <li className="panel-menu-open-list__li"><i class="far fa-trash-alt"></i> Delete</li>
                    </ul>
                </div>
            )}

        </div>
        <p className="panel__description">{props.todo.description}</p>
        <span className="panel__category-type">{makeUpperCase(props.todo.category)}</span>

        <span className="panel__progress-bar"/>
          <span className="panel__progress-bar--percentage"/>
        <span className="panel__days-left">2 days left</span>
      </div>
    )
}

// <div className="todo" style={{ textDecoration: todo.isComplete ? "line-through" : "" }} onClick={setShow}>
// <h2>{todo.title}</h2>
// <p>{todo.category}</p>
// <p>Start Date: {todo.startDate}</p>
// <p>End Date: {todo.dueDate}</p>
// <p>{daysToCompleteTask(todo.dueDate, todo.startDate)} Days assigned </p>
// <p>{timeRemainingOfTask(todo.dueDate)} Days till deadline</p>