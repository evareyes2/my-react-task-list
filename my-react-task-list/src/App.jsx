import React, { useState, useEffect } from 'react';
import Header from './Header';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage al iniciar la aplicación
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Función para guardar las tareas en localStorage
  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;

