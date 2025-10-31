import React, { useState } from "react";
import axios from "axios";

function Create() {

  const [task, setTask] = useState();

  const handleAdd = () => {
    axios.post("https://todo-list-app-backend-oaz9.onrender.com/add", {task: task})
    .then(result => location.reload())
    .catch(err => console.error(err.message));
  }

  return (
    <>
      <div className="flex gap-10">
        <input
          className="text-white outline-none border-2 border-zinc-200 p-3 rounded-md w-96"
          onChange={(e) => setTask(e.target.value)}
          type="text"
          name="task"
          placeholder="Enter Your Task"
        />
        <button 
        className="text-blue-300 border-white border-2 rounded-lg px-10 py-2"
        onClick={handleAdd}
        type="button"
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default Create;
