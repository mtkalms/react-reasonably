import useUpdateAnimation from "@/hooks/useUpdateAnimation"; // hidden
import { IconMinus, IconPlus, IconRestore } from "@tabler/icons-react";
import { useState, type DetailedHTMLProps, type HTMLAttributes } from "react";

type ExampleUseStateProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

function ExampleUseState(props: ExampleUseStateProps) {
  const [count, setCount] = useState<number>(0);
  props = { ...props, ...useUpdateAnimation() }; // hidden

  const handleIncrease = () => {
    setCount((val) => val + 1);
  };

  const handleDecrease = () => {
    setCount((val) => Math.max(0, val - 1));
  };

  const handleReset = () => {
    setCount(0);
  }

  return (
    <span {...props}>
      <button type="button" onClick={handleDecrease}>
        <IconMinus />
      </button>
      <button type="button" onClick={handleIncrease}>
        <IconPlus />
      </button>
      <button type="button" onClick={handleReset}>
        <IconRestore />
      </button>
      <span><b>Count: {count}</b></span>
    </span>
  );
}

export default ExampleUseState;