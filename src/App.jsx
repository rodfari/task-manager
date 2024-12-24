import { useState } from "react";
import "./App.sass";
import Task from "./components/Task";

function App() {
  console.log("[App component] - rendered");
  
  const [tasks, setTasks] = useState([
    "Create a task manager",
    "Style the task manager",
    "Delete tasks",
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <Task addTask={ addTask } />
      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <input type="checkbox" name={task} className="select-task" />
            <p>{task}</p>
            <button onClick={ () => deleteTask(index) }>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
