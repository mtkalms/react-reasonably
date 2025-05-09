import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

function ExampleUseState() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <span>
      <button type="button" onClick={handleIncrease}>
        <IconPlus/>
      </button>
      <button type="button" onClick={handleDecrease}>
        <IconMinus/>
      </button>
      <span className="text-2xl"><b>Count: {count}</b></span>
    </span>
  );
}

export default ExampleUseState;