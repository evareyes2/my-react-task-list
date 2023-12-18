import React from 'react';
import TaskList from '../TaskList'; 

const Tareas = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      <h2>Listado de Tareas</h2>
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default Tareas;
