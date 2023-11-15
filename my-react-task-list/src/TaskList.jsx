import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task
              task={task}
              onDelete={() => deleteTask(index)}
              onEdit={(updatedTask) => editTask(index, updatedTask)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

