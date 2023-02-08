import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'
import '../styles/Task.css';

export const FormTask = (props) => {
    const [input,setInput] = useState('')
    
    const addTask = (e)=>{
        e.preventDefault();
        const newTask = {
            id: uuid() ,
            text: input,
            complete:false
        };
        props.addTask(newTask)
    }
    const writing = (e) =>{
        setInput(e.target.value)
    }
    return (
    <form className="form-task"  >
        <input type="text" placeholder="Escribe una tarea" name="task" defaultValue={input} onChange={writing} />
        <button className='btnTask' onClick={addTask} >Agregar tarea</button>
    </form>
  )
}
