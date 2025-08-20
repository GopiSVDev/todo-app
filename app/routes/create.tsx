import { redirect } from "react-router";
import { createTodo } from "~/utils/todoUtils";
import type { Route } from "../+types/root";
import type { Todo } from "~/types/todo";
import TodoForm from "~/components/todoForm";

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

  const now = new Date();
  if (dueAt <= now) {
    return "Due date must be in the future";
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
  return <TodoForm error={actionData as string | undefined} />;
};

export default Create;
