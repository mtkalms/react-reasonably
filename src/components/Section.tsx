interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  chapter: string,
  tagline?: string,
  section?: string,
}

function Section({
  chapter,
  tagline,
  section,
  children,
  ...props
}: SectionProps) {
  return <section data-background-color="#1E1E3F" className="w-full h-full" {...props}>
    {section && 
      <div className="absolut inset-0 flex gap-4">
        <span className="text-[var(--primary)] font-bold">{chapter}</span>
        <span className="text-[var(--primary)] font-bold">|</span>
        <span>{section}</span>
      </div>
    }
    <div className="w-full h-full flex gap-4 items-center pb-30">
      {section ? <>{children}</> :
        <>
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
            <span className="text-[var(--primary)] font-bold text-8xl">{chapter}</span>
            <span className="text-[var(--highlight)] font-semibold">{tagline}</span>
          </div>
          <div className="w-full border-l-4 border-l-[var(--primary)] text-left py-20 px-15">
            {children}
          </div>
        </>
      }
    </div>
  </section>
}

export default Section;