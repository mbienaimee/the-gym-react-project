import React, { useState } from "react";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { id: new Date(), name: task, completed: false };
    addTask(newTask);
    setTask("");
  }
  return (
    <div>
      <h3>Add Tasks</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insert the task please"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {/* <p style={{ cursor: "pointer" }}>➕</p> */}
      </form>
    </div>
  );
}

export default AddTask;
