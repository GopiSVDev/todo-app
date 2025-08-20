import { deleteTodo } from "~/utils/todoUtils";
import type { Route } from "../+types/root";
import { redirect } from "react-router";

export async function clientAction({ params }: Route.ClientActionArgs) {
  if (!params.id) return null;

  deleteTodo(params.id);
  return redirect("/");
}
