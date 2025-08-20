import { getTodoById, updateTodo } from "~/utils/todoUtils";
import type { Route } from "../+types/root";
import type { Todo } from "~/types/todo";
import TodoForm from "~/components/todoForm";
import { redirect } from "react-router";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  if (!params.id) return null;

  const todo = getTodoById(params?.id);
  return todo || null;
}

export async function clientAction({
  request,
  params,
}: Route.ClientActionArgs) {
  if (!params.id) return null;

  const todo = getTodoById(params?.id);
  if (!todo) return "Todo not found";

  const formData = await request.formData();
  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const dueAt = formData.get("dueAt")?.toString() || "";

  if (!title || !dueAt) return "Title and Due Date are required";

  updateTodo(params.id, {
    ...todo,
    title,
    description,
    dueAt: new Date(dueAt),
  });

  return redirect("/");
}

const Edit = ({ loaderData }: Route.ComponentProps) => {
  const todo: Todo | undefined = loaderData ?? undefined;

  return <TodoForm todo={todo} />;
};

export default Edit;
