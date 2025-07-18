import React from "react";
import { MdDelete } from "react-icons/md";

function Task({ task, handleDelete, handleUpdate }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        alignContent: "center",
        textAlign: "center",
        fontSize: "20px",
        alignItems: "center",
        // justifyContent: "center",
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
      <button
        onClick={() => handleDelete(task.id)}
        style={{
          height: "30px",
          marginTop: "10px",
          borderRadius: "50px",
          marginLeft: "200px",
          // padding: "px",
        }}
      >
        <MdDelete style={{ color: "red", marginTop: "5px" }} />
      </button>
    </div>
  );
}

export default Task;
