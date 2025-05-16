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

function TodoEntry(props: TodoEntryProps) {
  return (
    <li className="todo-list-entry">
      <input type="checkbox" checked={props.done} />
      <label>{props.task}</label>
    </li>
  )
}

function TodoList(props: TodoListProps) {
  return (
    <>
      <h1>Todo: {props.title}</h1>
      <ul>
        {props.value.map(todo =>
          <TodoEntry
            task={todo.task}
            done={todo.done}
            key={todo.id}
          />
        )}
      </ul>
    </>
  )
}

export default TodoList;