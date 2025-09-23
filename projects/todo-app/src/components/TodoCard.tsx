import { useState } from "react";
import TodoItem from "./TodoItem";
import { Sparkles, Sun } from "./ui/MyIcons";

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
    <div className="todo-card">
      {/* header part */}
      <div className="card-head">
        <div className="intro">
          <Sparkles size={32} />
          <span className="title">To-do</span>
        </div>
        <div className="theme-toggle">
          <Sun size={32} />{" "}
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
