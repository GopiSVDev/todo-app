import type { Todo } from "~/types/todo";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { title, description, createdAt, status } = todo;

  return (
    <div id="todo-item">
      <div>{title}</div>
      <div>{description}</div>
      <div>{createdAt.toLocaleString()}</div>
      <div>{status}</div>
    </div>
  );
};

export default TodoItem;
