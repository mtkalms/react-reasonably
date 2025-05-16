import { useEffect, useRef, useState } from "react";

function useRenderVisual() {
  const lastClassName = useRef<string>("");
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    if (className === lastClassName.current) {
      setClassName("animate-border-pulse p-4 rounded-lg w-fit");
    } else {
      lastClassName.current = className;
    }
  });

  function onAnimationIteration() {
    setClassName("p-4 rounded-lg w-fit");
  }

  return { className, onAnimationIteration };
}

export default useRenderVisual;
