export type Todo = {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  status: TodoStatus;
  dueAt: Date;
};

type TodoStatus = "completed" | "pending" | "in progress";

// dummy data

export const todos: Todo[] = [
  {
    id: "1",
    title: "Buy groceries",
    description: "Milk, bread, eggs, and coffee",
    createdAt: new Date("2025-08-01T09:00:00Z"),
    status: "pending" as TodoStatus,
    dueAt: new Date("2025-08-02T18:00:00Z"),
  },
  {
    id: "2",
    title: "Finish project report",
    description: "Summarize Q2 progress and send to manager",
    createdAt: new Date("2025-08-01T10:30:00Z"),
    status: "in-progress" as TodoStatus,
    dueAt: new Date("2025-08-05T12:00:00Z"),
  },
  {
    id: "3",
    title: "Call plumber",
    description: "Fix kitchen sink leakage",
    createdAt: new Date("2025-08-02T08:15:00Z"),
    status: "completed" as TodoStatus,
    dueAt: new Date("2025-08-03T09:00:00Z"),
  },
  {
    id: "4",
    title: "Gym workout",
    description: "Leg day – squats and deadlifts",
    createdAt: new Date("2025-08-02T07:45:00Z"),
    status: "pending" as TodoStatus,
    dueAt: new Date("2025-08-02T20:00:00Z"),
  },
  {
    id: "5",
    title: "Read a book",
    description: "Continue reading 'Atomic Habits'",
    createdAt: new Date("2025-08-03T14:00:00Z"),
    status: "in-progress" as TodoStatus,
    dueAt: new Date("2025-08-10T20:00:00Z"),
  },
  {
    id: "6",
    title: "Plan weekend trip",
    description: "Look for places near the coast",
    createdAt: new Date("2025-08-03T16:30:00Z"),
    status: "pending" as TodoStatus,
    dueAt: new Date("2025-08-07T22:00:00Z"),
  },
  {
    id: "7",
    title: "Doctor appointment",
    description: "Routine check-up",
    createdAt: new Date("2025-08-04T09:45:00Z"),
    status: "completed" as TodoStatus,
    dueAt: new Date("2025-08-04T15:30:00Z"),
  },
  {
    id: "8",
    title: "Team meeting",
    description: "Discuss new product features",
    createdAt: new Date("2025-08-04T11:00:00Z"),
    status: "pending" as TodoStatus,
    dueAt: new Date("2025-08-06T09:00:00Z"),
  },
  {
    id: "9",
    title: "Update resume",
    description: "Add recent projects and achievements",
    createdAt: new Date("2025-08-05T12:00:00Z"),
    status: "in-progress" as TodoStatus,
    dueAt: new Date("2025-08-12T23:59:00Z"),
  },
  {
    id: "10",
    title: "Water plants",
    description: "Garden and indoor plants",
    createdAt: new Date("2025-08-05T06:30:00Z"),
    status: "completed" as TodoStatus,
    dueAt: new Date("2025-08-05T07:00:00Z"),
  },
];
