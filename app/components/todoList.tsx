import { Stack, Text, Paper } from "@mantine/core";
import type { Todo } from "~/types/todo";
import TodoItem from "./todoItem";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  const sortedTodos = [...todos].sort(
    (a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime()
  );

  return (
    <Stack gap="lg" align="center" w="100%">
      {todos.length === 0 ? (
        <Paper
          withBorder
          shadow="xs"
          radius="md"
          p="lg"
          ta="center"
          c="dimmed"
          maw={600}
          w="100%"
        >
          <Text fw={500}>No Todos Yet</Text>
          <Text size="sm">Start by creating your first task 🎯</Text>
        </Paper>
      ) : (
        sortedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </Stack>
  );
};

export default TodoList;
