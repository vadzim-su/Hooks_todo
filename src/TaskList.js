import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
}

export default TaskList;
