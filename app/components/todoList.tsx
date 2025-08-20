import { Stack, Text } from "@mantine/core";
import type { Todo } from "~/types/todo";
import TodoItem from "./todoItem";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  const sortedTodos = [...todos].sort(
    (a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime()
  );

  return (
    <Stack gap="md" align="center">
      {todos.length === 0 ? (
        <Text ta="center" c="dimmed">
          No Todos
        </Text>
      ) : (
        sortedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </Stack>
  );
};

export default TodoList;
