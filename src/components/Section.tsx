interface SectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  chapter?: string;
  tagline?: string;
  section?: string;
}

function Section({
  chapter,
  tagline,
  section,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-background-color="#1E1E3F"
      className="h-full w-full"
      {...props}
    >
      {section && (
        <div className="absolut inset-0 flex gap-4">
          <span className="font-bold text-(--primary)">{chapter}</span>
          <span className="font-bold text-(--primary)">|</span>
          <span>{section}</span>
        </div>
      )}
      <div className="flex h-full w-full items-center gap-4 pb-30">
        {section ? (
          <>{children}</>
        ) : (
          <>
            {chapter && (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                <span className="text-8xl font-bold text-(--primary)">
                  {chapter}
                </span>
                <span className="font-semibold text-(--highlight)">
                  {tagline}
                </span>
              </div>
            )}
            <div
              className={`w-full ${chapter ? "border-l-4 border-l-(--primary)" : ""} px-15 py-20 text-left`}
            >
              {children}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Section;
