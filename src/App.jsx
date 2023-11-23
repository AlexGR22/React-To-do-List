import React, { useState, useEffect } from 'react';
import TaskList from './Components/TaskList/TaskList';
import TaskForm from './Components/TaskForm/TaskForm';
import './App.css';
// import { FaCircle, FaCheckCircle } from "react-icons/fa";

const App = () => {
  // Estado para almacenar las tareas
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [showCompleted, setShowCompleted] = useState(false);

  // Efecto para cargar las tareas desde el almacenamiento local
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Efecto para guardar las tareas en el almacenamiento local cuando cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función para agregar una nueva tarea
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Función para marcar una tarea como completada o no completada
  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Obtener fecha actual y formatearla
  const fechaActual = new Date();
  const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
  const fechaFormateada = fechaActual.toLocaleDateString('es-ES', options).toUpperCase();

  return (
    <div className="container">
      <div className="title-container">
        {/* Mostrar la fecha formateada */}
        <h1 className="title">{fechaFormateada} </h1>
      </div>
      {/* Componente para agregar una nueva tarea */}
      <TaskForm addTask={addTask} />

      {/* Lista de tareas incompletas */}
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} showCompleted={false} />

      {/* Mostrar lista de tareas completadas si showCompleted es true */}
      {showCompleted && (
        <div className='task-list-incomplete'>
          <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} showCompleted={showCompleted} />
        </div>
      )}

      {/* Checkbox para mostrar/ocultar tareas completadas */}
      <div className="checkbox-container">
        <input type="checkbox" onChange={(e) => setShowCompleted(!showCompleted)} />
        <label style={{ color: 'black' }}> Mostrar tareas completadas</label>
      </div>
    </div>
  );
};

export default App;