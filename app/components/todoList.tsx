import type { Todo } from "~/types/todo";
import TodoItem from "./todoItem";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div id="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
