type TextBlockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function TextBlock({ children, ...props }: TextBlockProps) {
  return (
    <div className="w-full px-5 text-left" {...props}>
      {children}
    </div>
  );
}

export default TextBlock;
export type { TextBlockProps };
