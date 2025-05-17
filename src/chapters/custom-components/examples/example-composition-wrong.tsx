import useUpdateAnimation from "@/hooks/useUpdateAnimation"; // hidden
type Todo = {
  id: string;
  task: string;
  done?: boolean;
}

type TodoListProps = {
  title: string;
  value: Todo[];
}

type TodoEntryProps = {
  task: string;
  done?: boolean;
}

function TodoEntry({ task, done, ...props }: TodoEntryProps) {
  props = useUpdateAnimation({ ...props, className: "todo-list-entry" }); // hidden
  return (
    <li {...props}>
      <input type="checkbox" checked={done} />
      <label>{task}</label>
    </li>
  )
}

function TodoList({ title, value, ...props }: TodoListProps) {
  props = useUpdateAnimation(props); // hidden
  return (
    <div {...props}>
      <h1>{title}</h1>
      <ul>
        {value.map(todo =>
          <TodoEntry
            task={todo.task}
            done={todo.done}
            key={todo.id}
          />
        )}
      </ul>
    </div>
  )
}

export default TodoList;
export type { Todo };