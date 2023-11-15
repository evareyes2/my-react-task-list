import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (title.trim() !== '') {
      addTask({ title, description, completed: false });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <div id='box1'>
      <input id='textInput'
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea id='description'
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
    </div> 
  );
};

export default TaskForm;
