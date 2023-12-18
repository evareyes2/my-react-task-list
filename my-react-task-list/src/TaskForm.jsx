import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (title.trim().length > 2) { 
      addTask({ title, description, completed: false });
      setTitle('');
      setDescription('');
    } else {
      alert('El título debe tener al menos 3 caracteres.');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
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


