import React from "react";
import Task from "./Task";

function DisplayTasks({ taskes, handleDelete, handleUpdate }) {
  return (
    <div style={{ marginLeft: "470px", marginTop: "40px" }}>
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
