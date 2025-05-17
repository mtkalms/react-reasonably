import useUpdateAnimation from "@/hooks/useUpdateAnimation"; // hidden
import type { ReactNode } from "react";

type Todo = {
  id: string;
  task: string;
  done?: boolean;
}

type TodoListProps = {
  title?: string;
  children?: ReactNode;
}

type TodoListEntryProps = {
  task: string;
  done?: boolean;
}

function TodoListEntry({ task, done, ...props }: TodoListEntryProps) {
  props = useUpdateAnimation({ ...props, className: "todo-list-entry" }); // hidden
  return (
    <li {...props}>
      <input type="checkbox" checked={done} />
      <label>{task}</label>
    </li>
  )
}

function TodoList({ title, children, ...props }: TodoListProps) {
  props = useUpdateAnimation(props); // hidden
  return (
    <div {...props}>
      <h1>{title}</h1>
      <ul>
        {children}
      </ul>
    </div>
  )
}

TodoList.Entry = TodoListEntry;

export default TodoList;
export type { Todo };