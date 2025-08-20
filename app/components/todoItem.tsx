import { Button, Card, Text, Group, Badge, Stack } from "@mantine/core";
import { Form, Link } from "react-router";
import type { Todo } from "~/types/todo";
import { formatDate } from "~/utils/helper";

const statusColors: Record<Todo["status"], string> = {
  pending: "orange",
  completed: "green",
};

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, title, description, createdAt, status, dueAt } = todo;

  const createdDate = formatDate(createdAt);
  const dueDate = formatDate(dueAt);

  return (
    <Card shadow="sm" padding="lg" mb="md" maw={600}>
      <Stack gap="sm">
        <Group align="apart">
          <Text fw={500} size="lg">
            {title}
          </Text>
          <Badge color={statusColors[status]} variant="filled">
            {status}
          </Badge>
        </Group>

        {description && <Text c="dimmed">{description}</Text>}

        <Group gap="xl" style={{ fontSize: "0.9em" }}>
          <Text c="dimmed">Created: {createdDate}</Text>
          <Text c="dimmed">Due: {dueDate}</Text>
        </Group>

        <Group gap="sm">
          <Form method="post" action={`/todos/${id}/edit`}>
            <Button
              type="submit"
              name="status"
              value={status === "pending" ? "completed" : "pending"}
              variant="outline"
              color={status === "pending" ? "green" : "orange"}
            >
              Mark as {status === "pending" ? "Completed" : "Pending"}
            </Button>
          </Form>

          <Link to={`/todos/${id}/edit`} style={{ textDecoration: "none" }}>
            <Button color="blue" variant="outline">
              Edit
            </Button>
          </Link>

          <Form
            method="post"
            action={`/todos/${id}/delete`}
            onSubmit={(e) => {
              if (
                !window.confirm("Are you sure you want to delete this todo?")
              ) {
                e.preventDefault();
              }
            }}
          >
            <Button type="submit" color="red" variant="outline">
              Delete
            </Button>
          </Form>
        </Group>
      </Stack>
    </Card>
  );
};

export default TodoItem;
