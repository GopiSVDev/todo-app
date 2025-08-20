import type { Todo } from "~/types/todo";
import TodoItem from "./todoItem";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  const sortedTodos = [...todos].sort(
    (a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime()
  );

  return (
    <div id="todo-list">
      {todos.length === 0 ? (
        <p>No Todos Yet</p>
      ) : (
        sortedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
