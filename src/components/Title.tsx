interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string,
  subtitle?: string,
}

function Section({
  title,
  subtitle,
  ...props
}: SectionProps) {
  return <section data-background-color="#1E1E3F" className="w-full h-full" {...props}>
    <div className="w-full h-full  flex flex-col gap-4 items-center justify-center">
      <span className="text-[var(--primary)] font-semibold text-9xl">{title}</span>
      <span className="text-[var(--highlight)]">{subtitle}</span>
    </div>
  </section>
}

export default Section;