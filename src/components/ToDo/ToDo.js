import { useState } from "react";

const ToDo = () => {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([
    "learn react",
    "play football",
    "reading books",
  ]);

  const handleInputText = (e) => {
    setTextInput(e.target.value);
  };
  const handleClick = () => {
    setTasks([...tasks, textInput]);
    setTextInput("");
  };
  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>to do list</h3>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}{" "}
              <button onClick={() => handleRemoveTask(index)}>
                remove
              </button>{" "}
            </li>
          );
        })}
      </ul>

      <input
        onChange={handleInputText}
        value={textInput}
        type="text"
        placeholder="write todo"
      />
      <button onClick={handleClick}>Add task</button>
    </div>
  );
};

export default ToDo;
