import { RevealContext } from "@/contexts/RevealContext";
import clsx from "clsx";
import { useContext, useEffect, useRef } from "react";

interface CodeBlockProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  lineNumbers?: string | boolean;
  lineNumberStart?: number;
  language?: string;
  inline?: boolean;
}

function CodeBlock({
  children,
  lineNumbers,
  lineNumberStart,
  language = "typescript",
  inline,
  className,
  ...props
}: CodeBlockProps) {
  const code = useRef<string>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const reveal = useContext(RevealContext);

  useEffect(() => {
    if (children?.toString() === code.current) return;
    code.current = codeString(children) || "";
    codeRef.current?.setAttribute("data-highlighted", "");
    reveal?.highlightBlock?.(codeRef.current as HTMLDivElement);
  }, [children, reveal]);

  function codeString(text: React.ReactNode): string | undefined {
    return text
      ?.toString()
      .split("\n")
      .filter((d) => !d.includes("// hidden"))
      .join("\n");
  }

  return (
    <div
      className={clsx(
        "h-fit w-full rounded-xl text-left",
        inline
          ? "bg-(--contrast) !text-2xl"
          : "border-3 border-(--contrast) shadow-xl",
        className,
      )}
    >
      <pre className="!m-0 !w-full p-5 !shadow-none">
        <code
          ref={codeRef}
          data-line-numbers={lineNumbers}
          data-ln-start-from={lineNumberStart?.toString() || ""}
          className={clsx(
            `language-${language}`,
            "code-block overvlow-visible !max-h-none !bg-transparent !font-mono leading-[1.25]",
            inline ? "text-4xl" : "text-[11pt]",
          )}
          {...props}
        >
          {codeString(children)}
        </code>
      </pre>
    </div>
  );
}

export default CodeBlock;
