interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  chapter: string,
  section: string,
}

function Section({
  chapter,
  section,
  children,
  ...props
}: SectionProps) {
  return <section data-background-color="#1E1E3F" className="w-full h-full" {...props}>
    <div className="w-full flex gap-4 pb-10">
      <span className="text-[#FAD000] font-bold">{chapter}</span>
      <span className="text-[#FAD000] font-bold">|</span>
      <span>{section}</span>
    </div>
    <div className="w-full h-full flex gap-4">
      {children}
    </div>
  </section>
}

export default Section;