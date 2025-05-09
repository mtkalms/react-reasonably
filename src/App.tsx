import BasicsChapter from "@chapters/basics";
import StateManagementChapter from "@chapters/state-management";
import Title from "@components/Title";
import RevealContextProvider from "./contexts/RevealContext";

function App() {
  return (
    <div className="absolute h-full w-full inset-0">
      <RevealContextProvider>
        <div className="slides">
          <Title
            title="React Reasonably"
            subtitle="A practical guide for the impatient developer"
          />
          <BasicsChapter />
          <StateManagementChapter />
        </div>
      </RevealContextProvider>
    </div>
  );
}

export default App;
