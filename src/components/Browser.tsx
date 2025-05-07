interface BrowserProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function Browser({
  children
}: BrowserProps) {
  return <div className="browser shadow-xl rounded-xl border-2 border-[var(--contrast)]">
    <div className="top p-2.5 border-b-1 border-b-[var(--contrast)]">
      <div className="flex gap-2">
        <div className="h-3 w-3 p-[0.0625rem] border-0.5 border-[var(--contrast)] bg-red-500 rounded-full">
          <svg className="w-2.5 h-2.5 text-gray-800 opacity-60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18 18 6M18 18 6 6"/>
          </svg>
        </div>
        <div className="h-3 w-3 p-[0.0625rem] border-0.5 border-[var(--contrast)] bg-orange-400 rounded-full">
          <svg className="w-2.5 h-2.5 text-gray-800 opacity-0 hover:opacity-60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14"/>
          </svg>
        </div>
        <div className="h-3 w-3 p-[0.0625rem] border-0.5 border-[var(--contrast)] bg-green-500 rounded-full">
          <svg className="w-2.5 h-2.5 text-gray-800 fill-gray-800 opacity-60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 6 12 6 6 12 6 6M18 18 12 18 18 12 18 18"/>
          </svg>
        </div>
      </div>
    </div>
    <div className="example text-[12pt] p-5 text-[var(--highlight)]">
      {children}
    </div>
  </div>
}

export default Browser;