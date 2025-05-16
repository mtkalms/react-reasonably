import TodoList from "./example-jsx";

function InteractiveExampleJSX() {
  return <TodoList value={[
    { id: "t0", task: "JSX", done: true },
    { id: "t1", task: "Functional components" },
    { id: "t2", task: "State management" },
    { id: "t2", task: "Hooks" },
  ]} title="React Reasonably" />
}

export default InteractiveExampleJSX;