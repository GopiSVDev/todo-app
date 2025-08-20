import { Form, Link } from "react-router";
import type { Todo } from "~/types/todo";
import { formatDate } from "~/utils/helper";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, title, description, createdAt, status, dueAt } = todo;

  const createdDate = formatDate(createdAt);
  const dueDate = formatDate(dueAt);

  const statusColors: Record<string, string> = {
    pending: "orange",

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
      <Form method="post" action={`/todos/${id}/edit`}>
        <button
          type="submit"
          name="status"
          value={status === "pending" ? "completed" : "pending"}
        >
          Mark as {status === "pending" ? "Completed" : "Pending"}
        </button>
      </Form>

      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <Link to={`/todos/${id}/edit`}>
          <button>Edit</button>
        </Link>

        <Form method="post" action={`/todos/${id}/delete`}>
          <button>Delete</button>
        </Form>
      </div>
    </div>
  );
};

export default TodoItem;
