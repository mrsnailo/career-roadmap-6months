import { Cross } from "./ui/MyIcons";

type TodoItemProps = {
  id: number;
  task: string;
  removeTask: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, task, removeTask }) => {
  return (
    <>
      <div className="todo-item  surface-secondary">
        <div className="task">{task}</div>
        <div
          className="icon"
          onClick={() => {
            removeTask(id);
          }}
        >
          <Cross size={22} />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
