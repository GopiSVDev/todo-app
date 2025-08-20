import { Form } from "react-router";
import type { Todo } from "~/types/todo";
import { formatDateForInput } from "~/utils/helper";

type TodoFormProps = {
  todo?: Todo;
  error?: string;
};

const TodoForm = ({ todo, error }: TodoFormProps) => {
  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Form method="post">
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              defaultValue={todo?.title || ""}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Description:
            <textarea
              name="description"
              defaultValue={todo?.description || ""}
            />
          </label>
        </div>

        <div>
          <label>
            Due Date:
            <input
              type="date"
              name="dueAt"
              defaultValue={todo ? formatDateForInput(todo.dueAt) : ""}
              required
              min={formatDateForInput(new Date())}
            />
          </label>
        </div>

        <button type="submit">{todo ? "Save Changes" : "Create Todo"}</button>
      </Form>
    </div>
  );
};

export default TodoForm;
