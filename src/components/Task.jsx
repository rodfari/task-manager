import { useState } from "react";
import Button from "./Layout/Button";
import "./task.sass";
import Input from "./Layout/Input";

const Task = ({ addTask }) => {
  console.log("[Task component] - rendered");
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const input = fd.get("task");

    if(input === ""){ 
      setValid(false);
      return;
    }
    setValid(true);
    addTask(input);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="tasks-header">
          <h1>Task manager</h1>
          <Input type="text" placeholder="Add task..." name="task" />
          <Button>Add</Button>
          {!valid && <p className="error">Please enter a task</p>}
        </div>
      </form>
    </>
  );
};

export default Task;
