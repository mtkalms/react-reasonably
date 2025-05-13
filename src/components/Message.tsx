import { IconAlertHexagon, IconInfoHexagon, IconRadioactive, type IconProps } from "@tabler/icons-react";

type MessageType = "info" | "warning" | "antipattern";
interface MessageProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  type: MessageType
};

interface MessageIconProps extends IconProps {
  type: MessageType
};

function MessageIcon({ type = "info", ...props }: MessageIconProps) {
  switch (type) {
    case "info": return <IconInfoHexagon {...props} />;
    case "warning": return <IconAlertHexagon {...props} />;
    case "antipattern": return <IconRadioactive {...props} />;
    default: return;
  }
}

function Message({
  className,
  children,
  type,
  ...props
}: MessageProps) {
  return (
    <div className={`w-full rounded-xl border-2 shadow-xl text-(--${type === "info" ? "highlight" : "primary"}) border-(--${type === "info" ? "highlight" : "primary"}) ${className}`} {...props}>
      <div className="flex items-stretch overflow-hidden">
        <div className="flex items-center justify-center w-20">
          <MessageIcon type={type} size={36} />
        </div>
        <span className=" py-5 text-[18pt]">
          {children}
        </span>
      </div>
    </div >
  );
}

function MessageContainer(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div className={`ml-10 w-1/2 absolute bottom-10 flex flex-col gap-4 ${props.className}`} {...props}>
    {props.children}
  </div>
}

Message.Container = MessageContainer;

export default Message;
export { MessageContainer };


