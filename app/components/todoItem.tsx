import type { Todo } from "~/types/todo";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { title, description, createdAt, status, dueAt } = todo;

  const createdDate = new Date(createdAt).toLocaleDateString();
  const dueDate = new Date(dueAt).toLocaleDateString();

  const statusColors: Record<string, string> = {
    pending: "orange",
    inProgress: "blue",
    completed: "green",
  };

  return (
    <div id="todo-item">
      <h3 className="title">{title}</h3>
      {description && <p>{description}</p>}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.9em",
          color: "#555",
        }}
      >
        <span>Created: {createdDate}</span>
        <span>Due: {dueDate}</span>
        <span
          style={{ color: statusColors[status] || "gray", fontWeight: "bold" }}
        >
          {status}
        </span>
      </div>

      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <button style={{ flex: 1, padding: "6px 12px", cursor: "pointer" }}>
          Edit
        </button>
        <button style={{ flex: 1, padding: "6px 12px", cursor: "pointer" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
