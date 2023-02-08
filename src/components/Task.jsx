import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import '../styles/Task.css';

const Task = ({id,text,complete, addCompleteTask, deleteTask}) => {
  return (
    <div key={id} className={complete ? 'container complete' : 'container' } >
      <div className='input-text'
        onClick={()=>{
          addCompleteTask(id)
        }}
      >
        {text}
      </div>
      <div className='task-icons'
        onClick={()=>{
          deleteTask(id)
        }}
       >
        <AiOutlineClose className='task-icon' />
      </div>
    </div>
  )
}

export default Task;