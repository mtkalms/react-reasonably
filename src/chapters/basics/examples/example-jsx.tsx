import { useState } from "react"

function ExampleJSX() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  return <>
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
      <button type="submit" onClick={onSubmit}>Submit</button>
    </form>
    <footer>
      <b>Name:</b> {name ? name : "not provided" }
    </footer>
  </>
}

export default ExampleJSX;