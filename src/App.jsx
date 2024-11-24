import { useImmerReducer } from "node_modules/use-immer/dist/index";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

export default function App() {
  // const [tasks, setTasks] = useState(initialTasks);
  // const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  //use immer reducer
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, current) => (prev && prev > current.id ? prev : current.id),
      0
    );

    return maxId + 1;
  };

  // handlers
  const handleAddTask = (text) => {
    // setTasks([
    //   ...tasks,
    //   {
    //     id: getNextId(tasks),
    //     text: text,
    //     done: false,
    //   },
    // ]);
    dispatch({
      type: "added",
      // text:text,
      text,
      id: getNextId(tasks),
    }); //added
  };

  const handleChangeTask = (task) => {
    // const nextTasks = tasks.map((t) => {
    //   if (t.id === task.id) {
    //     return task;
    //   } else {
    //     return t;
    //   }
    // });

    // setTasks(nextTasks);

    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    // setTasks(tasks.filter((t) => t.id !== taskId));
    dispatch({
      type: "deleted",
      id: taskId,
    });
    // };
  };

  return (
    <div className="mt-5 ml-5">
      <h1>Prague itinerary</h1>

      <AddTask onAdd={handleAddTask} />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
