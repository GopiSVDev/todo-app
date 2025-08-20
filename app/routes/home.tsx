import type { Route } from "./+types/home";
import Navbar from "../components/navbar";
import TodoList from "../components/todoList";
import { todos } from "~/types/todo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo App" },
    { name: "description", content: "Create todo" },
  ];
}

export default function Home() {
  return (
    <div id="wrapper">
      <Navbar />
      <TodoList todos={todos} />
    </div>
  );
}
