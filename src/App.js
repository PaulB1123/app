import { useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import Fetcher from "./components/Fetching";
export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Clean stuff",
      completed: false,
    },
    {
      id: 2,
      task: "Pick up the kids",
      completed: true,
    },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);
  function deleteItem(id) {
    setTasks((oldState) => oldState.filter((item) => item.id !== id));
  }

  function toggleCompletion(id) {
    setTasks((oldState) => {
      return oldState.map((item) => {
        if (id === item.id) {
          const newItem = { ...item };
          newItem.completed = !newItem.completed;
          return newItem;
        }
        return item;
      });
    });
  }

  let all = tasks;
  if (!showCompleted) {
    all = tasks.filter((item) => item.completed === false);
  }

  function submit(e) {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      task: e.target.elements.name.value,
      completed: false,
    };
    setTasks((oldState) => oldState.concat(newTask));
  }

  return (
    <div id="App">
      <Fetcher />
      <form onSubmit={submit}>
        <div class="toggle">
          <label htmlFor="name">Task</label>
          <button
            id="toggle"
            onClick={() => {
              setShowCompleted((oldState) => !oldState);
            }}
          >
            Complete
          </button>
        </div>
        <input required type="text" id="name" name="task"></input>
        <button>Add Task</button>
      </form>

      <ul>
        {all.map((task) => (
          <ListItem toggleCompletion={toggleCompletion} deleteItem={deleteItem} {...task} />
        ))}
      </ul>
    </div>
  );
}
