import TextBlock from "@components/Block";
import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";
import Browser from "@components/Browser";
import ExampleRaw from "./examples/example-component?raw";
import ExampleUsage from "./examples/example-component-usage?raw";
import Example from "./examples/example-component";
import destructuring from "./examples/example-destructuring?raw";
import initializer from "./examples/example-initializer?raw";
import evaluation from "./examples/example-evaluation?raw";
import ExampleUseEffect from "./examples/example-useEffect?raw";

const CHAPTER = "React Basics";

function BasicsChapter() {
  return (
    <>
      <Section chapter={CHAPTER} />

      <Section chapter={CHAPTER}>
        <ul>
          <li>Core Concepts</li>
          <li>JSX</li>
          <li>Components</li>
          <li>Component Lifecycle</li>
          <li>Component State</li>
          <li>useEffect</li>
          <li>Common TypeScript Patterns</li>
        </ul>
      </Section>
      <Section chapter={CHAPTER} section="Core Concepts">
        <TextBlock>
          <ul>
            <li>React handles rendering and updating of UI</li>
            <li>
              <b>Virtual DOM:</b> virtual copy of real DOM
            </li>
            <li>Content is added to and mainpultaed in the virtual DOM</li>
            <li>React decides when which part of the UI gets updated</li>
            <li>
              <b>Reconciliation:</b> Virtual DOM is synced with with real DOM
            </li>
          </ul>
        </TextBlock>
      </Section>
      <Section chapter={CHAPTER} section="JSX">
        <TextBlock>
          <ul>
            <li>
              JavaScript syntax extension for <b>{"<html>"}</b> like markup
            </li>
            <li>
              All attributes are in <b>camelCase</b> (class is <b>className</b>)
            </li>
            <li>Must always have exactly on root element</li>
            <li>
              <b>{"<>"}</b> Fragments can be used as virtual root <b>{"</>"}</b>
            </li>
            <li>
              <b>{"{"}</b> JavaScript in curly braces (one-liners only){" "}
              <b>{"}"}</b>
            </li>
            <li>
              Custom components <b>{"<ExampleJSX/>"}</b>
            </li>
            <li>
              All elements created in a loop need a unique <b>key</b> attribute
            </li>
          </ul>
        </TextBlock>
        <div className="flex flex-col gap-4">
          <Browser>
            <Example onSubmit={() => {}} />
          </Browser>
          <CodeBlock lineNumbers="19-36">{ExampleRaw}</CodeBlock>
        </div>
      </Section>
      <Section chapter={CHAPTER} section="Components">
        <TextBlock>
          <ul>
            <li>
              <b>Functional Component:</b> defined by a render function
            </li>
            <ul>
              <li>Returns JSX to be rendered</li>
              <li>Gets called when props or state change</li>
              <li>
                <b>Always call components from JSX JSX, never as functions!</b>
              </li>
            </ul>
            <li>
              <b>Props:</b> attributes of the component passed down from parent
            </li>
            <li>
              <b>Hook:</b> Reusable component logic
            </li>
            <li>
              <b>State:</b> component state is managed using the useState hook
            </li>
          </ul>
        </TextBlock>

        <div className="flex flex-col gap-4">
          <CodeBlock lineNumbers="5-7">{ExampleUsage}</CodeBlock>
          <CodeBlock lineNumbers="3-38">{ExampleRaw}</CodeBlock>
        </div>
      </Section>
      <Section chapter={CHAPTER} section="Component Lifecycle">
        <TextBlock>
          <ul>
            <li>3 phases of component Lifecycle</li>
            <ul>
              <li>
                <b>Mounting: </b>
                Component is added to the screen
              </li>
              <li>
                <b>Updating: </b>
                Component <b>re-renders</b> when states or props change
              </li>
              <li>
                <b>Unmounting: </b>
                Component is removed from the screen
              </li>
            </ul>
            <li>
              Page refresh causes <b>remount</b> of all components
            </li>
          </ul>
        </TextBlock>
        <div className="flex flex-col gap-4"></div>
      </Section>
      <Section chapter={CHAPTER} section="Component State"></Section>
      <Section chapter={CHAPTER} section="Component Effects">
        <TextBlock>
          <div className="w-xl p-5">
            <CodeBlock className="text-2xl">
              useEffect(setup, dependencies)
            </CodeBlock>
          </div>
          <ul>
            <li>
              Setup runs on mount and every re-render with changed dependencies
            </li>
            <li>Setup can provide cleanup funtion as return</li>
            <li>Cleanup runs before setup on re-render and on unmount</li>
            <li>
              All props and states used in useEffect should be listed as
              dependencies
            </li>
          </ul>
        </TextBlock>
        <div className="flex flex-col items-start gap-4">
          <CodeBlock>{ExampleUseEffect}</CodeBlock>
        </div>
      </Section>
      <Section chapter={CHAPTER} section="Common Typescript Patterns">
        <TextBlock>
          <ul>
            <li>
              <b>Short-Circuiting</b> for conditional evaluation
            </li>
            <li>
              <b>Ternary Operator</b> for if-else cases
            </li>
            <li>
              <b>Destructuring</b> to extract object entries
            </li>
            <li>
              <b>Alias</b> to also rename the entry
            </li>
            <li>
              <b>Rest Operator</b> to bundle the other entries
            </li>
            <li>
              <b>Object Initializer</b> to create new object (from multiple
              others)
            </li>
            <li>
              <b>Spread Operator</b> to apply all entries of object to another
            </li>
          </ul>
        </TextBlock>
        <div className="flex flex-col items-start gap-4">
          <span className="caption">Short-Circuiting + Ternary Operator</span>
          <CodeBlock>{evaluation}</CodeBlock>
          <span className="caption">Destructuring + Alias + Rest Operator</span>
          <CodeBlock>{destructuring}</CodeBlock>
          <span className="caption">Object Initializer + Spread Operator</span>
          <CodeBlock>{initializer}</CodeBlock>
        </div>
      </Section>
    </>
  );
}

export default BasicsChapter;
