interface TextBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function TextBlock({
  children,
  ...props
}: TextBlockProps) {
  return <div className="w-full text-left px-5" {...props}>
    {children}
  </div>
}

export default TextBlock;
export type { TextBlockProps };