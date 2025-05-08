import { IconLockFilled, IconLockOpen } from "@tabler/icons-react";

interface ExampleConstantsProps {
  status: "open" | "closed"
  readOnly?: boolean
}

function ExampleConstants({
  status, 
  readOnly = false
}: ExampleConstantsProps) {
  const disabled: boolean = (status === "closed") || readOnly;

  return <form>
    <div>
      {disabled ? <IconLockFilled/> : <IconLockOpen/>}
      <input placeholder="Title" readOnly={disabled}/>
    </div>
  </form>
}

export default ExampleConstants;