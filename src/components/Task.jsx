import { useState } from "react";

export default function Task({ task, onDeleteTask, onChangeTask }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  let className = "ml-2 bg-teal-700 text-white rounded-md px-2";

  if (isEditing) {
    taskContent = (
      <>
        <input
          className="ml-2 shadow appearance-none border rounded
        py-1 px-3 text-gray-700 leading-tight focus:outline-none
         focus:shadow-outline"
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button className={className} onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className={className + " bg-yellow-700"}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <li className="my-2">
      <label>
        <input
          className="mr-2"
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChangeTask({
              ...task,
              done: e.target.checked,
            });
          }}
        />

        {taskContent}

        <button
          className={className + " bg-red-700"}
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </label>
    </li>
  );
}
