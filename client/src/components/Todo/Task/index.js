import React from 'react';

const Task = (props) => {
  const { task, handleIsDone, handleDelete } = props;
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => handleIsDone(task.id)}
      />
      {task.body}
      <button onClick={() => handleDelete(task.id)}>X</button>
    </li>
  );
};

export default Task;
