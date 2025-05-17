import TodoList from "./example-composition-right";

const title = "React Reasonably";
const data = [
  { id: "t0", task: "JSX", done: true },
  { id: "t1", task: "Functional components" },
  { id: "t2", task: "State management" },
  { id: "t3", task: "Hooks" },
];

function App() {
  return (
    <TodoList title={title}>
      {data.map(({ task, done }) =>
        <TodoList.Entry
          task={task}
          done={done}
        />
      )}
    </TodoList>
  )
}

export default App;