import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

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
          onAdd(text);
        }}
      >
        Add
      </button>
    </>
  );
}
