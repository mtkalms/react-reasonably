type BrowserProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function Browser({ children }: BrowserProps) {
  return (
    <div className="browser rounded-xl border-3 border-(--contrast) shadow-xl">
      <div className="top border-b-3 border-b-(--contrast) p-2.5">
        <div className="flex gap-2">
          <div className="border-0.5 h-3 w-3 rounded-full border-(--contrast) bg-red-500 p-[0.0625rem]" />
          <div className="border-0.5 h-3 w-3 rounded-full border-(--contrast) bg-orange-400 p-[0.0625rem]" />
          <div className="border-0.5 h-3 w-3 rounded-full border-(--contrast) bg-green-500 p-[0.0625rem]" />
        </div>
      </div>
      <div className="example p-5 text-[12pt] text-(--highlight)">
        {children}
      </div>
    </div>
  );
}

export default Browser;
