import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { Moon, Sparkles, Sun } from "./ui/MyIcons";
import { getSavedTheme, toogleTheme, applyTheme } from "../utils/Theme";
import type { Theme } from "../utils/Theme";

const initialTaskList = [
  {
    id: 1,
    task: "Learns React Basic",
  },
  {
    id: 2,
    task: "Create To-do App",
  },
];

const TodoCard: React.FC = () => {
  const [taskList, updateTaskList] = useState(initialTaskList);
  const [theme, setTheme] = useState<Theme>("light");

  // theme related effect
  useEffect(() => {
    const saved = getSavedTheme();
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const handleToggle = () => {
    toogleTheme();
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input[type="text"]') as HTMLInputElement;
    if (input && input.value.trim()) {
      updateTaskList([
        ...taskList,
        {
          id: Date.now(),
          task: input.value.trim(),
        },
      ]);
      input.value = "";
    }
  };

  const removeTaskHandler = (id: number) => {
    updateTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-card bg-surface">
      {/* header part */}
      <div className="card-head">
        <div className="intro">
          <Sparkles size={32} />
          <span className="title text-primary">To-do</span>
        </div>
        <div className="theme-toggle" onClick={handleToggle}>
          {theme === "light" ? <Sun size={32} /> : <Moon size={32} />}
        </div>
      </div>
      {/* card form */}
      <form className="card-form" onSubmit={addTaskHandler}>
        <input type="text" placeholder="Create a new todo..." />
        <button type="submit">Add</button>
      </form>
      {/* todo items */}
      <div className="todo-items">
        {taskList.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            task={task.task}
            removeTask={removeTaskHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
