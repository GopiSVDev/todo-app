import type { Todo } from "~/types/todo";

const KEY = "todos";

const saveTodos = (todos: Todo[]) => {
  localStorage.setItem(KEY, JSON.stringify(todos));
};

export const getTodos = (): Todo[] => {
  const todos = localStorage.getItem(KEY);
  if (!todos) return [];

  try {
    return JSON.parse(todos) as Todo[];
  } catch (error) {
    return [];
  }
};

export const getTodoById = (id: string): Todo => {
  const todo = getTodos().find((todo) => todo.id === id);
  if (!todo) {
    throw new Error(`Todo with id: ${id} not found`);
  }

  return todo;
};

export const createTodo = (todo: Todo) => {
  const todos = getTodos();
  todos.push(todo);
  saveTodos(todos);
};

export const updateTodo = (id: string, updates: Partial<Todo>) => {
  const todos = getTodos().map((todo) =>
    todo.id === id ? { ...todo, ...updates } : todo
  );
  saveTodos(todos);
};

export const updateTodoStatus = (id: string, status: Todo["status"]) => {
  const todos = getTodos();
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    todos[index].status = status;
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  saveTodos(todos);
};

export const deleteTodo = (id: string) => {
  const todos = getTodos().filter((todo) => todo.id !== id);
  saveTodos(todos);
};
