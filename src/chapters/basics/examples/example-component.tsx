import { useState, type ReactNode, type MouseEvent } from "react"

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
  children?: ReactNode;
}

function LoginForm(props: LoginFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    props.onSubmit?.(email, password);
    event.preventDefault();
  }

  return (
    <div>
      <h1>{props.children}</h1>
      <form>
        <input type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
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