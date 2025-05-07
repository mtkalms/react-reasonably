interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  chapter: string,
  section?: string,
}

function Section({
  chapter,
  section,
  children,
  ...props
}: SectionProps) {
  return <section data-background-color="#1E1E3F" className="w-full h-full" {...props}>
    {section && 
      <div className="absolut inset-0 flex gap-4">
        <span className="text-[#FAD000] font-bold">{chapter}</span>
        <span className="text-[#FAD000] font-bold">|</span>
        <span>{section}</span>
      </div>
    }
    <div className="w-full h-full flex gap-4 items-center pb-30">
      {section ? <>{children}</> :
        <>
          <div className="w-full h-full flex items-center justify-center text-[#FAD000] font-bold text-8xl">
            {chapter}
          </div>
          <div className="w-full border-l-4 border-l-[#FAD000] text-left py-10 px-15">
            {children}
          </div>
        </>
      }
    </div>
  </section>
}

export default Section;