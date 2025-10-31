import React, { useEffect } from "react";
import Create from "./components/Create";
import { useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/get")
    .then((result) => setTodos(result.data))
    .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios.put("http://localhost:3000/update/" + id)
    .then((result) => location.reload())
    .catch((err) => console.log(err));
  }

  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/delete/" + id)
    .then((result => location.reload()))
    .catch((err) => console.log(err));
  }

  return (
    <div className="w-full h-screen bg-zinc-800 flex flex-col gap-7 items-center">
      <h1 className="text-4xl text-zinc-200 font-bold my-10">ToDo List App</h1>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">No Tasks Yet.</h3>
        </div>
      ) : (
        todos.map((todo, index) => (
          <div className="task flex justify-between w-[570px] bg-zinc-100 p-3 rounded-lg">
            <div onClick={() => handleEdit(todo._id)} className="ckeckbox cursor-pointer flex justify-center items-center gap-2">
              {
                todo.completed ? <IoMdCheckbox className="text-xl"/> : <MdCheckBoxOutlineBlank className="text-xl"/>
              }
              <p className={`${!todo.completed ? "text-xl font-semibold text-zinc-900" : "text-xl font-semibold text-zinc-900 line-through decoration-2"}`}>{todo.task}</p>
            </div>
            <div>
              <button onClick={() => handleDelete(todo._id)} className="text-xl" type="button"><MdDelete className="cursor-pointer"/></button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
