import { Form, redirect } from "react-router";
import { createTodo } from "~/utils/todoUtils";
import type { Route } from "../+types/root";
import type { Todo } from "~/types/todo";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const dueAtRaw = formData.get("dueAt")?.toString();

  if (!title) return "Title is required";
  if (!dueAtRaw) return "Due date is required";

  const dueAt = new Date(dueAtRaw);
  if (isNaN(dueAt.getTime())) {
    return "Invalid Due Date";
  }

  const newTodo: Todo = {
    id: Date.now().toString(),
    title,
    description,
    createdAt: new Date(),
    status: "pending",
    dueAt,
  };

  createTodo(newTodo);

  return redirect("/");
}

const Create = ({ actionData }: Route.ComponentProps) => {
  const error = actionData;

  return (
    <div>
      <h2>Create a todo</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Form method="post">
        <div>
          <label>
            Title:
            <input type="text" name="title" required />
          </label>
        </div>

        <div>
          <label>
            Description:
            <textarea name="description" />
          </label>
        </div>

        <div>
          <label>
            Due Date:
            <input type="date" name="dueAt" required />
          </label>
        </div>

        <button type="submit">Save</button>
      </Form>
    </div>
  );
};

export default Create;
