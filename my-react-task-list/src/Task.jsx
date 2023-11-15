import React from 'react';

const Task = ({ task, onToggle }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={onToggle} />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </span>
      </label>
    </div>
  );
};

export default Task;
