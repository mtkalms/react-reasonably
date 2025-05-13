import { useState } from "react"

interface ExampleComponentProps {
  onSubmit: (name: string, password: string) => void
}

function ExampleComponent({ 
  onSubmit 
}: ExampleComponentProps) {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit?.(name, password);
  }

  return (
    <>
      <form>
        <input type="text"
          value={name} 
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
        <input type="password"
          value={password} 
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <footer>
        <b>Name:</b> {name ? name : "not provided" }
      </footer>
    </>
  )
}

export default ExampleComponent;