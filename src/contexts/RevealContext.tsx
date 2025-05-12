import { createContext, useEffect, useRef, type RefObject } from "react";
import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight";

interface HighlightPlugin {
  highlightBlock: (block: Element) => void;
}

interface RevealContextApi {
  deckDivRef: RefObject<HTMLDivElement | null>;
  deckRef: RefObject<Reveal.Api | null>;
  highlightBlock: (block: Element) => void | null;
}

interface RevealContextProviderProps {
  children: React.ReactNode;
}

const RevealContext = createContext<RevealContextApi | undefined>(undefined);

function RevealContextProvider({ children }: RevealContextProviderProps) {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api>(null); // reference to deck reveal instance

  function highlightBlock(elem: Element): void {
    const highlightPlugin: HighlightPlugin = deckRef.current?.getPlugin(
      "highlight",
    ) as unknown as HighlightPlugin;
    highlightPlugin?.highlightBlock(elem);
  }

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      highlight: {
        highlightOnLoad: false,
      },
      transition: "slide",
      plugins: [Highlight],
      width: 1920,
      height: 1080,
    });

    deckRef.current.initialize().then(() => {
      document.querySelectorAll(".code-block").forEach((elem) => {
        if (!elem.getAttribute("data-highlighted")) highlightBlock(elem);
      });
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <RevealContext.Provider
      value={{
        deckRef: deckRef,
        deckDivRef: deckDivRef,
        highlightBlock: highlightBlock,
      }}
    >
      <div className="reveal" ref={deckDivRef}>
        {children}
      </div>
    </RevealContext.Provider>
  );
}

export default RevealContextProvider;
export { RevealContext };
