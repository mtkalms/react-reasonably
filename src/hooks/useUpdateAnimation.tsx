import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

function useUpdateAnimation({ className: otherClasses, ...props }: { className?: string }) {
  const didMount = useRef<boolean>(false);
  const lastClassName = useRef<string>("");
  const [className, setClassName] = useState<string>("");
  const updateClassName = (value: string) => setClassName(clsx(value, otherClasses))

  useEffect(() => {
    if (didMount.current) {
      if (className === lastClassName.current) {
        updateClassName("animate-update rounded-lg w-fit");
      } else {
        lastClassName.current = className;
      }
    } else {
      didMount.current = true;
      updateClassName("rounded-lg w-fit");
    }
  });

  function onAnimationIteration() {
    updateClassName("rounded-lg w-fit");
  }

  return { className, onAnimationIteration, ...props };
}

export default useUpdateAnimation;
