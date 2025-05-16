import { useState, type ReactNode, type MouseEvent } from "react"

interface LoginFormProps {
  onSubmit?: (name: string, password: string) => void;
  children?: ReactNode;
}

function LoginForm(props: LoginFormProps) {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    props.onSubmit?.(name, password);
    event.preventDefault();
  }

  return (
    <div>
      <h1>{props.children}</h1>
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
    </div>
  )
}

export default LoginForm;