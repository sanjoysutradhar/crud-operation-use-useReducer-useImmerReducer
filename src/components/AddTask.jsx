import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "../context/TasksContext";
import { getNextId } from "../utils/getNextId";

export default function AddTask() {
  const [text, setText] = useState("");

  const dispatch = useContext(TaskDispatchContext);
  const tasks = useContext(TaskContext);
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        className="shadow appearance-none border rounded
        py-1 px-3 text-gray-700 leading-tight focus:outline-none
         focus:shadow-outline"
        placeholder="Add task"
        value={text}
        onChange={handleChangeText}
      />

      <button
        className="ml-2 bg-teal-700 text-white rounded-md px-2 py-1"
        onClick={() => {
          setText("");
          // onAdd(text);
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
          });
        }}
      >
        Add
      </button>
    </>
  );
}
