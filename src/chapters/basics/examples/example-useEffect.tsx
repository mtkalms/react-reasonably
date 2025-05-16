import { useEffect, useState } from "react"

interface ExampleProps {
  title: string;
}

function Example(props: ExampleProps) {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    // runs on every re-render
  })

  useEffect(() => {
    // only runs once on mount
    const timerId = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      // only runs on unmount
      clearInterval(timerId);
    }
  }, [])

  useEffect(() => {
    // only runs when name changes
    console.log(name);
  }, [name])

  useEffect(() => {
    // only runs when props change
    console.log(props.title);
  }, [props])

  return <div>
    <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)} />
  </div>
}

export default Example;