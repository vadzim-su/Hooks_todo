import React, { useState } from "react";

function TaskItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);

  const cls = ["list"];

  if (checked) {
    cls.push("completed");
  }

  return (
    <li className={cls.join(" ")}>
      <p className="task">
        <span>{title}</span>
        <button onClick={() => setChecked(!checked)} className="button">
          Complete
        </button>
      </p>
    </li>
  );
}
export default TaskItem;
