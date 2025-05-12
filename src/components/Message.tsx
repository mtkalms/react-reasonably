import { IconInfoHexagon } from "@tabler/icons-react";

type MessageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function Message({ children }: MessageProps) {
  return (
    <div className="mt-15 flex w-4xl items-stretch overflow-hidden rounded-xl border-4 border-[var(--highlight)]">
      <div className="flex items-center bg-[var(--highlight)]">
        <IconInfoHexagon className="m-5 h-12 w-12 stroke-[var(--contrast)]" />
      </div>
      <div className="flex w-full flex-col">
        <span className="px-8 py-5 text-[18pt] text-[var(--highlight)]">
          {children}
        </span>
      </div>
    </div>
  );
}

export default Message;
