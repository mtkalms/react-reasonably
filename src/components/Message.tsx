import {
  IconAlertHexagon,
  IconInfoHexagon,
  IconRadioactive,
  type IconProps,
} from "@tabler/icons-react";
import clsx from "clsx";

type MessageType = "info" | "warning" | "antipattern";
interface MessageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  type: MessageType;
}

interface MessageIconProps extends IconProps {
  type: MessageType;
}

function MessageIcon({ type = "info", ...props }: MessageIconProps) {
  switch (type) {
    case "info":
      return <IconInfoHexagon {...props} />;
    case "warning":
      return <IconAlertHexagon {...props} />;
    case "antipattern":
      return <IconRadioactive {...props} />;
    default:
      return;
  }
}

function Message({ className, children, type, ...props }: MessageProps) {
  return (
    <div
      className={clsx(
        "w-full rounded-xl border-2 shadow-xl",
        type === "info" ? "text-(--highlight)" : "text-(--primary)",
        type === "info" ? "border-(--highlight)" : "border-(--primary)",
        className,
      )}
      {...props}
    >
      <div className="flex items-stretch overflow-hidden">
        <div className="flex w-20 items-center justify-center">
          <MessageIcon type={type} size={36} />
        </div>
        <span className="py-5 text-[18pt]">{children}</span>
      </div>
    </div>
  );
}

function MessageContainer(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  return (
    <div
      className={`absolute bottom-10 ml-10 flex w-1/2 flex-col gap-4 ${props.className}`}
      {...props}
    >
      {props.children}
    </div>
  );
}

Message.Container = MessageContainer;

export default Message;
export { MessageContainer };
