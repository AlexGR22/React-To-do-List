import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  // Estado para almacenar el nombre de la tarea ingresado en el input
  const [taskName, setTaskName] = useState('');

  // Estado para controlar la visibilidad del mensaje de error
  const [invisible, setInvisible] = useState(true);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') {
      // Si el nombre de la tarea está vacío, mostrar mensaje de error
      return setInvisible(false);
    }
     // Si el nombre de la tarea no está vacío continuamos con la carga de la tarea
    addTask(taskName);
    setTaskName('');
    setInvisible(true);
  };

  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        {/* Input para ingresar el nombre de la tarea */}
        <input
          className="task-input"
          type="text"
          placeholder="Ingrese una Tarea"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        {/* Botón para agregar la tarea */}
        <button type="submit" className="add-button">+</button>
      </form>
      {/* Mensaje de error si se intenta guardar una tarea vacía */}
      <p className={invisible == true ? 'invisible' : 'visible' }>No se puede guardar una tarea vacía</p>
    </div>
  );
};

export default TaskForm;