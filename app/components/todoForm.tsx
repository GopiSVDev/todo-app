import type { Todo } from "~/types/todo";
import { Form, useNavigate } from "react-router";
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
import { ArrowLeft } from "lucide-react";

type TodoFormProps = {
  todo?: Todo;
  error?: string;
};

const TodoForm = ({ todo, error }: TodoFormProps) => {
  const navigate = useNavigate();

  return (
    <Box mx="auto" my="lg" px="lg" py="md" maw={500} bdrs="md" bg="white">
      <Group mb="md">
        <Button
          variant="subtle"
          radius="xl"
          leftSection={<ArrowLeft size={16} />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Group>

      {error && (
        <Alert color="red" mb="md" radius="md" variant="light">
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
            autosize
            minRows={3}
            maxRows={10}
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

          <Button type="submit" fullWidth radius="xl">
            {todo ? "Save Changes" : "Create Todo"}
          </Button>
        </Stack>
      </Form>
    </Box>
  );
};

export default TodoForm;
