import { useEffect, useRef } from 'react'
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css'; 
import './highlight/shades-of-purple.css'
import BasicsChapter from './chapters/basics';

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
      // Prevents double initialization in strict mode
      if (deckRef.current) return;

      deckRef.current = new Reveal(deckDivRef.current!, {
          transition: "slide",
          plugins: [Highlight],
          width: 1920,
          height: 1080,
      });

      deckRef.current.initialize().then(() => {
      });

      return () => {
          try {
              if (deckRef.current) {
                  deckRef.current.destroy();
                  deckRef.current = null;
              }
          } catch (e) {
              console.warn("Reveal.js destroy call failed.");
          }
      };
  }, []);

  return <div className="absolute h-full w-full inset-0">
    <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          <BasicsChapter/>
        </div>
    </div>
  </div>
}

export default App
