import React from "react";
import Task from "./Task";

function DisplayTasks({ taskes, handleDelete, handleUpdate }) {
  return (
    <div style={{ textAlign: "center" }}>
      {taskes.map((task) => (
        <Task
          task={task}
          handleDelete={handleDelete}
          key={task.id}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default DisplayTasks;
