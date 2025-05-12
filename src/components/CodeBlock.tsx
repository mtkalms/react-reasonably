import { RevealContext } from "@/contexts/RevealContext";
import { useContext, useEffect, useRef } from "react";

interface CodeBlockProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  lineNumbers?: string | boolean;
  lineNumberStart?: number;
  language?: string;
}

function CodeBlock({
  children,
  lineNumbers,
  lineNumberStart,
  language = "typescript",
  ...props
}: CodeBlockProps) {
  const code = useRef<string>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const codeText = Array.isArray(children)
    ? children.join("")
    : (children as string);
  const reveal = useContext(RevealContext);

  useEffect(() => {
    if (codeText === code.current) return;
    code.current = codeText;
    codeRef.current?.setAttribute("data-highlighted", "");
    const highlight: any = reveal?.deckRef.current?.getPlugin(
      "highlight",
    ) as any;
    highlight?.highlightBlock(codeRef.current);
  }, [children]);

  return (
    <div className="h-fit w-full rounded-xl border-3 border-[var(--contrast)] text-left shadow-xl">
      <pre className="!m-0 !w-full p-5 !shadow-none">
        <code
          ref={codeRef}
          data-line-numbers={lineNumbers}
          data-ln-start-from={lineNumberStart?.toString() || ""}
          className={`language-${language} code-block overvlow-visible !max-h-none !bg-transparent !font-mono text-[12pt] leading-[1.25]`}
          {...props}
        >
          {Array.isArray(children) ? children.join("") : children}
        </code>
      </pre>
    </div>
  );
}

export default CodeBlock;
