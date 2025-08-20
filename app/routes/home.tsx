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
import { useState } from "react";

export async function clientLoader() {
  const todos: Todo[] = getTodos();
  return todos;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const todos: Todo[] = loaderData ?? [];
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;

    return filter === "completed"
      ? todo.status === "completed"
      : todo.status === "pending";
  });

  return (
    <div id="wrapper">
      <Navbar />
      <StatusFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} />
    </div>
  );
}
