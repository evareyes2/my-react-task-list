import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSaveEdit = () => {
    onEdit({
      ...task,
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };
  return (
    <div id="box">
      {isEditing ? (
        <div id="box2">
          <input id="text1"
            type="text" 
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea id='textarea'
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <label id="label">
            <input type="checkbox" defaultChecked={task.completed} />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>
          </label>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;

