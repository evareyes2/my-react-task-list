import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useTaskHandler from './Hooks/useTaskHandler';
import Header from './Header';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Home from './Components/Home';
import Tareas from './Components/Tareas';
import SobreNosotros from './Components/SobreNosotros';
import Menu from './Components/Menu';

function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTaskHandler();

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      updateTask(JSON.parse(storedTasks));
    }
  }, [updateTask]);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.confing.initialColorMode} />
    <Router>
      <div>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tareas" render={(props) => <Tareas {...props} tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />} />
          <Route path="/sobre-nosotros" component={SobreNosotros} />
        </Switch>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={updateTask} />
      </div>
    </Router>
    </ChakraProvider>
  );
}

export default App;
