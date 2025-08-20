import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("create", "routes/create.tsx"),
  route("todos/:id/edit", "routes/todos.$id.edit.tsx"),
  route("todos/:id/delete", "routes/todos.$id.delete.tsx"),
] satisfies RouteConfig;
