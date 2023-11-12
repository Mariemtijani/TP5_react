import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import './style.css'


export default function Item(props) {

  const textStyle = {
    textDecoration: props.status ? 'line-through' : 'none'
   
};
  return (
    <div className='todo-container'  >
      <li className='  p-3 d-flex justify-content-between border border-0 border-bottom' >
        <div className='taskText d-flex align-items-center ' style={textStyle}>
        <span className='todoNumber '>{props.number}</span>
          <span className='fw-bold text-muted'>{props.text}</span>
        </div>
        <div className='iconDiv'>
          <span title='Completed / Not completed' onClick={props.markDone}><FontAwesomeIcon icon={faCircleCheck}  /></span>
          
          {props.status ? null : 

              <span title='Edit' onClick={props.edit}><FontAwesomeIcon icon={faPen}  /></span>

          }
          
          <span title='Delete' onClick={props.deleteTodo}><FontAwesomeIcon icon={faTrash}  /></span>
        </div>
         
      </li>
    </div>
  )
}
