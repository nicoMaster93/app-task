import React, { useState } from 'react'
import Task from './Task'
import { FormTask } from './FormTask'

const ListTask = () => {
    const [taskArr, setTaskArr] = useState([]);
    
    const addCompleteTask = (id)=>{
        console.log('complete',id)
        const taskUpdate = taskArr.map((tsk) => {
            if(tsk.id === id){
                tsk.complete = !tsk.complete;
            }
            return tsk;
        });
        setTaskArr(taskUpdate)
    }
    const addTask = (task)=>{
        if(task.text.trim()){
            task.text = task.text.trim();
            setTaskArr([task,...taskArr])
        }
        console.log(taskArr)
    }
    const deleteTask = (id)=>{
        console.log('delete',id)
        const taskUpdate = taskArr.filter(tsk => tsk.id !== id);
        setTaskArr(taskUpdate)
    }
    return (
    <>
        <FormTask 
            addTask={(task)=>{
                addTask(task)
            }}
        />
        <h4>Registros</h4>
        <div className='container-list-task'>
            {
                taskArr.map((e,i) => {
                    return(
                        <Task 
                            key={e.id}
                            id={e.id}
                            text={e.text}
                            complete={e.complete}
                            addCompleteTask={addCompleteTask}
                            deleteTask={deleteTask}
                        />
                    )
                })
            }
        </div>
    </>
  )
}

export default ListTask