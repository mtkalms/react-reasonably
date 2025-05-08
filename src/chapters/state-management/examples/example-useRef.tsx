import { useRef } from "react";

function ExampleUseRef() {
  const ref = useRef<HTMLInputElement>(null);

  const focus = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    ref.current?.focus();
  }

  return <form>
    <input placeholder="Title" ref={ref}/>
    <button onClick={focus}>Focus Pocus</button>
  </form>
}

export default ExampleUseRef;