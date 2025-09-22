import { Sparkles, Sun } from "./ui/MyIcons";

const TodoCard: React.FC = () => {
  return (
    <div className="todo-card">
      <div className="card-head">
        <div className="magic-icon">
          <Sparkles size={32} />
        </div>
        <div className="title">To-do</div>
        <div className="theme-toggle">
          <Sun size={32} />{" "}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
