import type { Todo } from "~/types/todo";
import TodoItem from "./todoItem";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div id="todo-list">
      {todos.length === 0 ? (
        <p>No Todos Yet</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
