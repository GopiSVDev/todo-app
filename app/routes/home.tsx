import { useState } from "react";

import type { Route } from "./+types/home";
import type { Todo } from "~/types/todo";

import Navbar from "../components/navbar";
import TodoList from "../components/todoList";
import StatusFilter from "~/components/statusFilter";

import { getTodos } from "~/utils/todoUtils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo App" },
    { name: "description", content: "Create todo" },
  ];
}

export async function clientLoader() {
  return getTodos();
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const todos: Todo[] = loaderData ?? [];
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [query, setQuery] = useState("");

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "all") return true;

      return filter === "completed"
        ? todo.status === "completed"
        : todo.status === "pending";
    })
    .filter((todo) => todo.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <main id="wrapper">
      <Navbar query={query} setQuery={setQuery} />
      <StatusFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} />
    </main>
  );
}
