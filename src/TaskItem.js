import React, { useState } from "react";

function TaskItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);

  const completeTodo = () => {
    setChecked(!checked);
  };

  return (
    <li className={checked ? "list completed" : "list"}>
      <p className="task">
        <span>
          {id + 1 + ". "}
          {title}
        </span>
        <button onClick={completeTodo} className="buttonComplete">
          Complete
        </button>
      </p>
    </li>
  );
}
export default TaskItem;
