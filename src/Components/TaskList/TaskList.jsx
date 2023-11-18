import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, completeTask, deleteTask, showCompleted }) => {

  // Función para generar los elementos de la lista de tareas
  const taskItems = (completedValue) => {
    return (
      tasks
        .filter((task) => task.completed === completedValue)
        .map((task) => (
          // Componente TaskItem para mostrar cada tarea
          <TaskItem key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask} />
        ))
    );
  };

  return (
    <>
      <ul className="task-list">
        {/* Generar los elementos de la lista de tareas */}
        {taskItems(showCompleted)}
      </ul>
    </>
  );
};

export default TaskList;