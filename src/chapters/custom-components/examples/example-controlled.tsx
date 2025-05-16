import useUpdateAnimation from "@/hooks/useUpdateAnimation"; // hidden
import { useState, type FormEvent } from "react"

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void
}

function LoginForm({ onSubmit, ...props }: LoginFormProps) {
  props = { ...props, ...useUpdateAnimation() } // hidden

  const [email, setEmail] = useState<string>("user@example.ca");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    onSubmit?.(email, password);

    // prevents page from reloading
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <input type="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input type="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm;