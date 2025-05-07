interface BlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function Block({
  children,
  ...props
}: BlockProps) {
  return <div className="w-full h-full text-left" {...props}>
    {children}
  </div>
}

export default Block;
export type { BlockProps };