import { useState } from "react";
import ExampleConstants from "./example-constants";

function InteractiveExampleConstants() {
  const [closed, setClosed] =useState<boolean>(false);
  const [readOnly, setReadOnly] = useState<boolean>(false);

  return <div className="flex w-full h-full items-center gap-8">
    <div className="w-full">
      <ExampleConstants status={closed ? "closed" : "open"} readOnly={readOnly}/>
    </div>
    <div className="bg-[var(--contrast)] w-sm py-2 text-left flex flex-col gap-2 -m-5 rounded-br-xl">
      <span className="px-5 font-bold">Props:</span>
      <div className="flex gap-4 px-5">
        <input type="checkbox" checked={closed} onChange={() => setClosed(d => !d)}/>
        <label>status: {closed ? "closed" : "open"}</label>
      </div>
      <div className="flex gap-4 px-5">
        <input type="checkbox" checked={readOnly} onChange={() => setReadOnly(d => !d)}/>
        <label>readOnly</label>
      </div>
    </div>
  </div>
}

export default InteractiveExampleConstants;