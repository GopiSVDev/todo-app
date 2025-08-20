import type { Route } from "./+types/home";
import Navbar from "../components/navbar";
import TodoList from "../components/todoList";
import StatusFilter from "~/components/statusFilter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo App" },
    { name: "description", content: "Create todo" },
  ];
}

import { getTodos } from "~/utils/todoUtils";
import type { Todo } from "~/types/todo";

export async function clientLoader() {
  const todos: Todo[] = getTodos();
  return todos;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const todos: Todo[] = loaderData ?? [];

  return (
    <div id="wrapper">
      <Navbar />
      <StatusFilter />
      <TodoList todos={todos} />
    </div>
  );
}
