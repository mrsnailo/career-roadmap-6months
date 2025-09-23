import { Sparkles, Sun } from "./ui/MyIcons";

const TodoCard: React.FC = () => {
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
      <form className="card-form">
        <input type="text" placeholder="Create a new todo..." />
        <button type="button">Add</button>
      </form>
    </div>
  );
};

export default TodoCard;
