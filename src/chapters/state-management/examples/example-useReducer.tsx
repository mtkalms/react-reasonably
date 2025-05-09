import { useReducer } from "react"

interface Todo {
  id: string
  task: string
  complete: boolean
}

function TodoReducer(
  state: Todo[], 
  action: {type: 'DO' | 'UNDO', id: string}
): Todo[] {
  switch (action.type) {
    case 'DO':
      return state.map(todo => 
        (todo.id === action.id) ? { ...todo, complete: true } : todo
      );
    case 'UNDO':
      return state.map(todo => 
        (todo.id === action.id) ? { ...todo, complete: false } : todo
      );
    default: return state;
  }
}

function ExampleUseReducer({initial}: {initial: Todo[]}) {
  const [todos, dispatch] = useReducer(TodoReducer, initial);
  return <>
    <h1>TODO</h1>
    {todos.map(todo => (
      <span key={todo.id}>
        <input type="checkbox" 
          checked={todo.complete} 
          onClick={() => dispatch({
            type: todo.complete ? 'UNDO' : 'DO', ...todo
          })}/>
        <label>{todo.task}</label>
      </span>
    ))}
  </>
};

export default ExampleUseReducer;