import Title from "@components/Title";
import RevealContextProvider from "./contexts/RevealContext";
import BasicsChapter from "@chapters/basics";
import StateManagementChapter from "@chapters/state-management";
import CustomComponentsChapter from "@chapters/custom-components";
import CustomHooksChapter from "@chapters/custom-hooks";
import Section from "@components/Section";
import RefactoringChapter from "./chapters/refactoring";
import PerformanceChapter from "./chapters/performance";

function App() {
  return (
    <div className="absolute h-full w-full inset-0">
      <RevealContextProvider>
        <div className="slides">
          <Title
            title="React Reasonably"
            subtitle="A practical guide for the impatient developer"
          />
          <Section chapter="React Reasonably" tagline="A practical guide">
            <div>
              <ul>
                <li>React Basics</li>
                <li>State Managenment</li>
                <li>Custom Components</li>
                <li>Custom Hooks</li>
                <li>Refactoring</li>
                <li>Performance</li>
              </ul>
            </div>
          </Section>
          <BasicsChapter />
          <StateManagementChapter />
          <CustomComponentsChapter />
          <CustomHooksChapter />
          <RefactoringChapter />
          <PerformanceChapter />
        </div>
      </RevealContextProvider>
    </div>
  );
}

export default App;
