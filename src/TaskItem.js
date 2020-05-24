import React from "react";

function TaskItem({ title, id, completed, onClick }) {
  const changeClick = () => {
    onClick(id, !completed);
  };

  return (
    <li className={completed ? "list completed" : "list"}>
      <p className="task">
        <span>
          {id + 1 + ". "}
          {title}
        </span>
        <button onClick={changeClick} className="buttonComplete">
          Complete
        </button>
      </p>
    </li>
  );
}

export default TaskItem;
