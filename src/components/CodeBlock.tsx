interface CodeBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  
}

function CodeBlock({ 
  children,
  ...props
}: CodeBlockProps) {
  return <div className="w-full text-left">
    <pre className="!m-0 p-15 !w-full">
      <code data-noescape className="!w-full !bg-transparent" {...props}>
      {children}
      </code>
    </pre>
  </div>
}

export default CodeBlock;