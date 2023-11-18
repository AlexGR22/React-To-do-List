import React from 'react';
import { FaRegCircle, FaRegCheckCircle  } from "react-icons/fa";
const TaskItem = ({ task, completeTask, deleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>

      {/* <p className="task-name">{task.name}</p> */}


      <span className={task.completed == true ? 'completed' : 'incomplete' }>{task.completed ? <FaRegCheckCircle />  : <FaRegCircle style={{color: 'red'}} /> }</span>

      <input
        type='button'
        className={task.completed == true ? 'completed' : 'incomplete'}
        value={task.name}
        onClick={() => completeTask(task.id)}
      />
      

      <input type='button' value='X' className="delete-button" onClick={() => deleteTask(task.id)} />


      
    </li>
  );
};

export default TaskItem;




{/*
      

<li className={`task-item ${task.completed ? 'completed' : ''}`}>

      <p className="task-name">{task.name}</p>

         completa o incompleta

      <input 
          type='button'  
          className={task.completed == true ? 'completed' : 'incomplete' }
          value={task.completed ? 'Completa' : 'Incompleta'}
          onClick={() => completeTask(task.id)}
      />
    
    

      chekcbock

      <input 
          type='checkbox' 
          onChange={(e) => completeTask(task.id)}
          checked={task.completed}
      />
    
    
    
    
    */}

