import TodoList from "./example-composition-more-wrong";

const title = "React Reasonably";
const data = [
  { id: "t0", task: "JSX", done: true },
  { id: "t1", task: "Functional components" },
  { id: "t2", task: "State management" },
  { id: "t3", task: "Hooks" },
];

function App() {
  return (
    <TodoList title={title} value={data} />
  )
}

export default App;