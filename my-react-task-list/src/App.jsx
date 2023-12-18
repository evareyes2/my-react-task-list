import React, { useEffect } from 'react';
import useTaskHandler from './Hooks/useTaskHandler';
import Header from './Header';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTaskHandler();

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      updateTask(JSON.parse(storedTasks));
    }
  }, [updateTask]);

  return (
    <div>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={updateTask} />
    </div>
  );
}

export default App;


