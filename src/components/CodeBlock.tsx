import { RevealContext } from "@/contexts/RevealContext";
import { useContext, useEffect, useRef } from "react";

interface CodeBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  
}

function CodeBlock({ 
  children,
  ...props
}: CodeBlockProps) {
  const code = useRef<HTMLDivElement>(null);
  const reveal = useContext(RevealContext);

  useEffect(() => {
    const highlight: any = reveal?.deckRef.current?.getPlugin('highlight');
    code.current?.setAttribute('data-highlighted', "");
    highlight?.hljs.highlightElement(code.current);
  }, [code, children])

  return <div className="w-full h-fit text-left shadow-xl rounded-xl border-3 border-[var(--contrast)]">
    <pre className="!m-0 p-5 !w-full !shadow-none">
      <code ref={code} data-noescape className="language-typescript overvlow-visible !max-h-none !bg-transparent text-[12pt] leading-[1.25] !font-mono" {...props}>
      {children}
      </code>
    </pre>
  </div>
}

export default CodeBlock;