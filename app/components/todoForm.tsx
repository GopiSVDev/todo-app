import { Form, useNavigate } from "react-router";
import type { Todo } from "~/types/todo";
import { formatDateForInput } from "~/utils/helper";
import {
  TextInput,
  Textarea,
  Button,
  Box,
  Alert,
  Stack,
  Group,
} from "@mantine/core";

type TodoFormProps = {
  todo?: Todo;
  error?: string;
};

const TodoForm = ({ todo, error }: TodoFormProps) => {
  const navigate = useNavigate();

  return (
    <Box mx="auto" my="lg" px="md" py="md" maw={500} bdrs="md" bg="white">
      <Group mb="md">
        <Button variant="subtle" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Group>

      {error && (
        <Alert color="red" mb="md">
          {error}
        </Alert>
      )}

      <Form method="post">
        <Stack gap="sm">
          <TextInput
            label="Title"
            name="title"
            defaultValue={todo?.title || ""}
            required
          />

          <Textarea
            label="Description"
            name="description"
            defaultValue={todo?.description || ""}
          />

          <TextInput
            label="Due Date"
            name="dueAt"
            type="date"
            defaultValue={todo ? formatDateForInput(todo.dueAt) : ""}
            required
            min={formatDateForInput(new Date())}
          />

          <Button type="submit" fullWidth>
            {todo ? "Save Changes" : "Create Todo"}
          </Button>
        </Stack>
      </Form>
    </Box>
  );
};

export default TodoForm;
