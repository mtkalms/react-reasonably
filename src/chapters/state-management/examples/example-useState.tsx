import useUpdateAnimation from "@/hooks/useUpdateAnimation"; // hidden
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState, type DetailedHTMLProps, type HTMLAttributes } from "react";

type ExampleUseStateProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

function ExampleUseState(props: ExampleUseStateProps) {
  const [count, setCount] = useState(0);
  props = {...props, ...useUpdateAnimation()}; // hidden

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <span {...props}>
      <button type="button" onClick={handleIncrease}>
        <IconPlus />
      </button>
      <button type="button" onClick={handleDecrease}>
        <IconMinus />
      </button>
      <span><b>Count: {count}</b></span>
    </span>
  );
}

export default ExampleUseState;