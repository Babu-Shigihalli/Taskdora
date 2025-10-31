import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";

export default function App() {
  return (
  <div>
    <h1>Taskdora</h1>
    <p>Our friendly TakManager</p>
    <Taskform />
    <TaskList />
    <Progresstracker />
    <button>Clear all Tasks</button>
    </div>
  )
}
