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
      <h3 style={{ fontSize: "50px" }}>todos</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to do ..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            borderRadius: "30px",
            padding: "15px",
            width: "400px",
            fontSize: "19px",
          }}
        />
        {/* <p style={{ cursor: "pointer" }}>➕</p> */}
      </form>
    </div>
  );
}

export default AddTask;
