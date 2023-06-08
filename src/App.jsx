import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const emptyList = [];
function App() {
  const [thingsToDo, setToDo] = useState(emptyList);
  const [textValue, setTextValue] = useState("");

  function addTask() {
    const updatedList = [...thingsToDo];
    updatedList.push(textValue);
    setToDo(updatedList);
    console.log(updatedList);
  }

  function deleteTask(i) {
    const updatedList = [...thingsToDo];
    console.log("deleting task" + i);
    const filteredTasks = updatedList.filter((task, j) => j !== i);
    setToDo(filteredTasks);
  }
  return (
    <>
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        type="text"
      />
      <button onClick={addTask} type="submit">
        Add
      </button>
      <ul>
        {thingsToDo.map((task, i) => (
          <li>
            {task}
            <button onClick={(e) => deleteTask(i)}>Delete</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
