interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title?: string;
  subtitle?: string;
}

function Title({ title, subtitle, ...props }: TitleProps) {
  return (
    <section
      data-background-color="#1E1E3F"
      className="h-full w-full"
      {...props}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <span className="text-9xl font-semibold text-[var(--primary)]">
          {title}
        </span>
        <span className="text-[var(--highlight)]">{subtitle}</span>
      </div>
    </section>
  );
}

export default Title;
