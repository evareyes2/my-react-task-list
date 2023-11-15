import React, { useState } from 'react';
import Header from './Header';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { name: 'Ir de compras', completed: false },
    { name: 'Terminar el trabajo', completed: true },
    { name: 'Leer un libro', completed: false },
  ]);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
