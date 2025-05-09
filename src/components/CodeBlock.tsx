import { RevealContext } from "@/contexts/RevealContext";
import { useContext, useEffect, useRef } from "react";

interface CodeBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  lineNumbers?: boolean
  lineNumberStart?: number
  language?: string
}

function CodeBlock({ 
  children,
  lineNumbers,
  lineNumberStart,
  language = "typescript",
  ...props
}: CodeBlockProps) {
  const code = useRef<string>(null)
  const codeRef = useRef<HTMLDivElement>(null);
  const codeText = Array.isArray(children) ? children.join("") : children as string;
  const reveal = useContext(RevealContext);

  let hljsFlags = [];
  lineNumbers || hljsFlags.push("nohljsln");
  language && hljsFlags.push(`language-${language}`);

  useEffect(() => {
    if (codeText === code.current) return;
    code.current = codeText;
    codeRef.current?.setAttribute('data-highlighted', "");
    const hljs: any = (reveal?.deckRef.current?.getPlugin('highlight') as any)?.hljs;
    hljs?.highlightBlock(codeRef.current);
    lineNumbers && hljs?.lineNumbersBlock(codeRef.current);
  }, [children])

  return <div className="w-full h-fit text-left shadow-xl rounded-xl border-3 border-[var(--contrast)]">
    <pre className="!m-0 p-5 !w-full !shadow-none">
      <code ref={codeRef} 
        data-ln-start-from={(lineNumbers && lineNumberStart) ? lineNumberStart.toString() : ""}
        className={`overvlow-visible !max-h-none !bg-transparent text-[12pt] leading-[1.25] !font-mono ${hljsFlags.join(" ")}`} {...props}>
      {Array.isArray(children) ? children.join("") : children}
      </code>
    </pre>
  </div>
}

export default CodeBlock;