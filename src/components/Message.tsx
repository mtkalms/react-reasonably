import { IconInfoHexagon } from "@tabler/icons-react"

interface MessageProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function Message({
  children
}: MessageProps) {
  return <div className="mt-15 w-4xl flex items-stretch rounded-xl border-4 border-[var(--highlight)] overflow-hidden">
    <div className="bg-[var(--highlight)] flex items-center">
      <IconInfoHexagon className="w-12 h-12 stroke-[var(--contrast)] m-5"/>
    </div>
    <div className="flex flex-col w-full">
      <span className="text-[18pt] text-[var(--highlight)] px-8 py-5">
        {children}
      </span>
    </div>
  </div>
}

export default Message;