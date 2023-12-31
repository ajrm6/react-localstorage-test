import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ taskI, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    {

      return taskI.filter(task => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));
    }
  };
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task</th>
        </tr>
      </thead>
     
      <tbody> {taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
