import { IconLogin } from "@tabler/icons-react";
import LoginForm from "./example-component";

function LoginPanel() {
  return (
    <LoginForm
      onSubmit={(name,) => console.log(name)}
    >
      <IconLogin /> Login
    </LoginForm>
  )
}

export default LoginPanel;