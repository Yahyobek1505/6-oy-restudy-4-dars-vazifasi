import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  function getData() {
    let data = [];
    if (localStorage.getItem("todos")) {
      data = JSON.parse(localStorage.getItem("todos"));
    }
    return data;
  }
  function handleClick(e) {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      name: name,
      status: false,
    };
    let main = getData();
    main.push(todo);
    localStorage.setItem("todos", JSON.stringify(main));
    setName("");
    const copied = JSON.parse(JSON.stringify(todos));
    copied.push(todo);
    setTodos(copied);
  }
  function handleDelete() {
    let todoDelete = confirm(`Rostdan ham  ushbu ma'lumotni o'chirmoqchimisiz?`);
    if (todoDelete) {
    const copied = JSON.parse(JSON.stringify(todos));
    copied.pop()
    setTodos(copied);
    console.log("Todo was deleted successfully!");
    }
  }
  return (
    <>
      <Header></Header>
      <div className="container">
        <form className="w-50 mx-auto">
          <div className="mb-3 d-flex gap-2">
            <input
              type="text"
              className="form-control fs-5"
              placeholder="Enter todos......"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              type="button"
              className="btn btn-primary w-25 fs-5"
              onClick={handleClick}>
              Add
            </button>
          </div>
        </form>
        <div className="todo-wrapper ">
          <div className="todo-head">
            <h3>Check</h3>
            <h3>Name</h3>
            <h3>Status</h3>
            <h3>Action</h3>
          </div>
          {todos &&
            todos.map((el, index) => {
              return (
                <div key={index} className="todos-body">
                  <span>
                    <input type="checkbox" />
                  </span>
                  <span className="todo">{el.name}</span>
                  <span>Active</span>
                  <span>
                    <i className="fa-regular fa-pen-to-square"></i>{" "}
                    <i className="fa-solid fa-trash" onClick={handleDelete}></i>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
