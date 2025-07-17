import React, { useState } from "react";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";

const tasks = [
  {
    id: 1,
    name: "Doing homework",
    completed: false,
  },
  {
    id: 2,
    name: "visiting friends",
    completed: false,
  },
  {
    id: 3,
    name: "mopping",
    completed: false,
  },
];

function App() {
  const [taskes, setTaskes] = useState(tasks);

  function addTask(task) {
    setTaskes([...taskes, task]);
  }
  function handleDelete(id) {
    setTaskes(taskes.filter((t) => t.id !== id));
  }

  function handleUpdate(id) {
    setTaskes(
      taskes.map((it) =>
        it.id === id ? { ...it, completed: !it.completed } : it
      )
    );
  }

  return (
    <div>
      <AddTask addTask={addTask} />
      <DisplayTasks
        taskes={taskes}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
