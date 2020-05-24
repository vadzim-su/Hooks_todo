import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    const elem = localStorage.getItem("tasks");

    if (elem) {
      setTasks(JSON.parse(elem));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const changeCheck = (id, value) => {
    let changedLocalStorage = JSON.parse(localStorage.getItem("tasks")).map(
      (task) => {
        if (task && task.id === id) {
          task.completed = value;
        }
        return task;
      }
    );
    setTasks(changedLocalStorage);
  };

  const enrichTasks = (tasks) => {
    let modifiedTasks = tasks.map((task) => {
      return Object.assign({}, task, { onClick: changeCheck });
    });
    return modifiedTasks;
  };

  const addNewTodo = (e) => {
    setTaskTitle(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: taskTitle,
        completed: false,
      },
    ]);
    setTaskTitle("");
  };

  return (
    <div className="container">
      <form onSubmit={addTask}>
        <h1>
          TO D<img className="img" src="./logoT.png" alt="" />
        </h1>

        <div className="form-group">
          <label>Enter your task</label>
          <input
            type="text"
            className="form-control"
            value={taskTitle}
            onChange={addNewTodo}
            required
          />
        </div>

        <button type="submit" className="btn btn-outline-success">
          Add task
        </button>
      </form>

      <span className="count">
        There {tasks.length <= 1 && tasks ? " is " : " are "}
        {tasks.length ? tasks.length : " no "}
        {tasks.length === 1 ? " task " : " tasks "}
      </span>

      <TaskList tasks={enrichTasks(tasks)} />
    </div>
  );
}

export default App;
