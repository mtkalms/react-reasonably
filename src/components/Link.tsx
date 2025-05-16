import { IconExternalLink } from "@tabler/icons-react";
import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

function Link({
  children,
  ...props
}: AnchorProps) {
  return <a
    target="_blank"
    {...props}
  >
    <IconExternalLink className="mx-1 -mt-[0.15lh] size-[0.9em] py-0 inline-block align-middle" />
    {children}
  </a>
}

export default Link;