import React from "react";
import { MdDelete } from "react-icons/md";

function Task({ task, handleDelete, handleUpdate }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        // alignContent: "center",
        // justifyContent: "center",
        textAlign: "center",
      }}
    >
      <input type="checkbox" onClick={() => handleUpdate(task.id)} />
      <p>
        {task.completed === true ? (
          <span style={{ textDecoration: "line-through" }}>{task.name}</span>
        ) : (
          <span>{task.name}</span>
        )}
      </p>
      <button onClick={() => handleDelete(task.id)} style={{ height: "30px" }}>
        <MdDelete style={{ color: "red" }} />
      </button>
    </div>
  );
}

export default Task;
