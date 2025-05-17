import useUpdateAnimation from "@/hooks/useUpdateAnimation"; // hidden
import type { FormEvent } from "react"

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void
}

function LoginForm({ onSubmit, ...props }: LoginFormProps) {
  props = useUpdateAnimation(props); // hidden

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const formData = new FormData(event.currentTarget)
    if (formData.has("email"), formData.has("password")) {
      onSubmit?.(
        formData.get("email") as string,
        formData.get("password") as string
      );
    }
    // prevents page from reloading
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <input type="email"
        id="email"
        placeholder="email"
        defaultValue="user@example.ca"
      />
      <input type="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default LoginForm;