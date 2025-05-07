import { useState } from "react"

function Test() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  return <form>
    <input 
      value={firstName} 
      onChange={(event) => setFirstName(event.target.value)}
      placeholder="First Name"
    />
    <input 
      value={lastName} 
      onChange={(event) => setLastName(event.target.value)}
      placeholder="Last Name"
    />
    <button type="submit" onClick={onSubmit}>Submit</button>
  </form>
}

export default Test;