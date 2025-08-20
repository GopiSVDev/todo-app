export type Todo = {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  status: TodoStatus;
};

type TodoStatus = "completed" | "pending" | "in progress";

// dummy data

export const todos: Todo[] = [
  {
    id: "1",
    title: "Buy groceries",
    description: "Milk, eggs, bread, and coffee",
    createdAt: new Date("2025-08-20T09:15:00Z"),
    status: "pending",
  },
  {
    id: "2",
    title: "Finish project report",
    description: "Complete the financial analysis section",
    createdAt: new Date("2025-08-19T14:30:00Z"),
    status: "in progress",
  },
  {
    id: "3",
    title: "Workout",
    description: "45 minutes of cardio at the gym",
    createdAt: new Date("2025-08-15T18:00:00Z"),
    status: "completed",
  },
  {
    id: "4",
    title: "Call mom",
    description: "Catch up and check in",
    createdAt: new Date("2025-08-10T11:45:00Z"),
    status: "completed",
  },
  {
    id: "5",
    title: "Read a book",
    description: "Continue reading 'Clean Code'",
    createdAt: new Date("2025-08-18T20:00:00Z"),
    status: "in progress",
  },
];
