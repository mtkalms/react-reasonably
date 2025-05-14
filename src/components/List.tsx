import clsx from "clsx";
import { createContext, useContext } from "react";

type UlProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;
type LiProps = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

const ListStepContext = createContext<string>("");

interface ListProps extends UlProps {
  active?: string;
}

interface ListStepProps extends LiProps {
  step?: string;
}

function List({ active = "", ...props }: ListProps) {
  return (
    <ListStepContext.Provider value={active}>
      <ul {...props} />
    </ListStepContext.Provider>
  );
}

function ListEntry(props: LiProps) {
  return <li {...props} />;
}

function ListStep({ className, step, ...props }: ListStepProps) {
  const current = useContext(ListStepContext);
  const dim = current && current !== step;
  return (
    <li className={clsx(dim ? "brightness-50" : "", className)} {...props} />
  );
}

List.Entry = ListEntry;
List.Step = ListStep;

export default List;
export { ListEntry, ListStep };
