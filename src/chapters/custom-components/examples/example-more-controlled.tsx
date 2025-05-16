import useUpdateAnimation from "@/hooks/useUpdateAnimation"; // hidden
type LoginFormData = {
  email?: string;
  password?: string;
}

interface LoginFormProps {
  value?: LoginFormData;
  onChange?: (value: LoginFormData) => void;
  onSubmit?: () => void;
}

function LoginForm({
  value,
  onChange,
  onSubmit,
  ...props
}: LoginFormProps) {
  props = { ...props, ...useUpdateAnimation() } // hidden

  return (
    <form onSubmit={onSubmit} {...props}>
      <input type="email"
        id="email"
        placeholder="email"
        value={value?.email}
        onChange={(event) =>
          onChange?.({ ...value, email: event.target.value })
        }
      />
      <input type="password"
        id="password"
        placeholder="password"
        value={value?.password}
        onChange={(event) =>
          onChange?.({ ...value, password: event.target.value })
        }
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm;