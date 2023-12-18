import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (title.trim().length < 3) {
      setError('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    addTask({ title, description: description || '', completed: false });
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      {error && <p className="error">{error}</p>}
      <div className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description (Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskForm;

