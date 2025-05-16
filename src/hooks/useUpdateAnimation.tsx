import { useEffect, useRef, useState } from "react";

function useUpdateAnimation() {
  const didMount = useRef<boolean>(false);
  const lastClassName = useRef<string>("");
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    if (didMount.current) {
      if (className === lastClassName.current) {
        setClassName("animate-update p-4 rounded-lg w-fit");
      } else {
        lastClassName.current = className;
      }
    } else {
      didMount.current = true;
    }
  });

  function onAnimationIteration() {
    setClassName("p-4 rounded-lg w-fit");
  }

  return { className, onAnimationIteration };
}

export default useUpdateAnimation;
