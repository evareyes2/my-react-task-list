import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task task={task} onToggle={() => toggleTask(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
