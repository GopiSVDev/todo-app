export type Todo = {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  status: TodoStatus;
  dueAt: Date;
};

type TodoStatus = "completed" | "pending";
