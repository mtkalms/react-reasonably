interface BrowserProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function Browser({
  children
}: BrowserProps) {
  return <div className="browser shadow-xl rounded-xl border-3 border-[var(--contrast)]">
    <div className="top p-2.5 border-b-3 border-b-[var(--contrast)]">
      <div className="flex gap-2">
        <div className="h-3 w-3 p-[0.0625rem] border-0.5 border-[var(--contrast)] bg-red-500 rounded-full"/>
        <div className="h-3 w-3 p-[0.0625rem] border-0.5 border-[var(--contrast)] bg-orange-400 rounded-full"/>
        <div className="h-3 w-3 p-[0.0625rem] border-0.5 border-[var(--contrast)] bg-green-500 rounded-full"/>
      </div>
    </div>
    <div className="example text-[12pt] p-5 text-[var(--highlight)]">
      {children}
    </div>
  </div>
}

export default Browser;