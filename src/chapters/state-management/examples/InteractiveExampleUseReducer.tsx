import ExampleUseReducer from "./example-useReducer";

const initialTodos = [
  {
    id: 'a',
    task: 'Learn React',
    complete: false,
  },
  {
    id: 'b',
    task: 'Learn TypeScript',
    complete: true,
  },
  {
    id: 'c',
    task: 'Eat cake',
    complete: false,
  },
];

function InteractiveExampleUseReducer() {
  return <ExampleUseReducer initial={initialTodos}/>
}

export default InteractiveExampleUseReducer;