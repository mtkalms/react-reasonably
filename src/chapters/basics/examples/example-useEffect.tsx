import { useEffect, useState } from "react"

interface ExampleProps {

}

function Example(props: ExampleProps) {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    // runs on every re-render
  })

  useEffect(() => {
    // only runs once on mount
    return () => {
      // only runs on unmount
    }
  }, [])

  useEffect(() => {
    // only runs when name changes
  }, [name])

  useEffect(() => {
    // only runs when props change
  }, [props])

  return <div>
    <input 
      type="text" 
      value={name} 
      onChange={e => setName(e.target.value)}/>
  </div>
}

export default Example;