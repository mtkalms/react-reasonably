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
      <div className="absolute -inset-70 -z-20 bg-[url(/react.svg)] bg-size-[40%] bg-bottom-right bg-no-repeat opacity-5 blur-xs drop-shadow-2xl/80" />
      <div className="absolute -inset-50 -z-20 bg-[url(/react.svg)] bg-size-[40%] bg-top-left bg-no-repeat opacity-5 blur-sm drop-shadow-2xl/80" />
      <div className="absolute inset-70 top-5 right-80 -z-20 bg-[url(/react.svg)] bg-size-[30%] bg-top-right bg-no-repeat opacity-6 blur-md drop-shadow-xl/100" />
      <div className="absolute inset-50 bottom-0 left-100 -z-20 bg-[url(/react.svg)] bg-size-[30%] bg-bottom-left bg-no-repeat opacity-6 blur-md drop-shadow-lg/100" />
      <div className="absoolute z-20 flex h-full w-full flex-col items-center justify-center gap-4">
        <span className="-mb-5 text-9xl font-semibold text-(--primary)">
          {title}
        </span>
        <span className="text-(--highlight)">{subtitle}</span>
      </div>
    </section>
  );
}

export default Title;
