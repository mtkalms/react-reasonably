import useUpdateAnimation from "@/hooks/useUpdateAnimation"; // hidden
import type { FormEvent } from "react"

type LoginFormData = {
  email?: string;
  password?: string;
}

interface LoginFormProps {
  defaultValue?: LoginFormData;
  onSubmit?: (value: LoginFormData) => void;
}

function LoginForm({
  defaultValue,
  onSubmit,
  ...props
}: LoginFormProps) {
  props = useUpdateAnimation(props); // hidden

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const formData = new FormData(event.currentTarget)
    if (formData.has("email"), formData.has("password")) {
      onSubmit?.({
        email: formData.get("email") as string,
        password: formData.get("password") as string
      });
    }
    // prevents page from reloading
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <input type="email"
        id="email"
        placeholder="email"
        defaultValue={defaultValue?.email}
      />
      <input type="password"
        id="password"
        placeholder="password"
        defaultValue={defaultValue?.password}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default LoginForm;