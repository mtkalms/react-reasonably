import type { BlockProps } from "./Block";

interface CodeBlockProps extends BlockProps {
  
}

function CodeBlock({ 
  children,
  ...props
}: CodeBlockProps) {
  return <div className="w-full h-full text-left" {...props}>
    <pre>
      <code data-trim data-noescape>
      {children}
      </code>
    </pre>
  </div>
}

export default CodeBlock;