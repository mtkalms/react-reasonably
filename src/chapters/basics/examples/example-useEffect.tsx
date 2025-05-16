import { useEffect, useState } from "react"

interface ExampleProps {
  role: string;
}

function Example(props: ExampleProps) {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    // runs on every re-render
    console.log("Render");
  })

  useEffect(() => {
    // only runs once on mount
    const timerId = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => {
      // only runs on unmount
      clearInterval(timerId);
    }
  }, [])

  useEffect(() => {
    // only runs when name changes
    console.log(props.role, name);
  }, [name, props.role])

  return <div>
    <h2>{props.role}</h2>
    <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)} />
  </div>
}

export default Example;