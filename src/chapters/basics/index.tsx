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
import Message from "@/components/Message";
import List from "@/components/List";
import { IconLink } from "@tabler/icons-react";

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
      <section>
        {[
          ["", "17-34"],
          ["camelCase", "21,26"],
          ["fragment", "17,34"],
          ["inline", "32"],
          ["custom", "3-36"],
          ["", "17-34"],
        ].map(([step, highlight], idx) => (
          <Section chapter={CHAPTER} section="JSX" key={idx}>
            <TextBlock>
              <List active={step as string}>
                <List.Step>
                  JavaScript syntax extension for <b>{"<html>"}</b> like markup
                </List.Step>
                <List.Step step="camelCase">
                  All attributes are in <b>camelCase</b> (class is{" "}
                  <b>className</b>)
                </List.Step>
                <List.Step step="fragment">
                  Must always have exactly on root element
                </List.Step>
                <List.Step step="fragment">
                  <b>{"<>"}</b> Fragments can be used as virtual root{" "}
                  <b>{"</>"}</b>
                </List.Step>
                <List.Step step="inline">
                  <b>{"{"}</b> JavaScript in curly braces (one-liners only){" "}
                  <b>{"}"}</b>
                </List.Step>
                <List.Step step="custom">
                  Custom components <b>{"<ExampleJSX/>"}</b>
                </List.Step>
                <List.Step>
                  All elements created in a loop need a unique <b>key</b>{" "}
                  attribute
                </List.Step>
              </List>
            </TextBlock>
            <div className="flex flex-col gap-4">
              {step === "custom" ? (
                <CodeBlock lineNumbers="6">{ExampleUsage}</CodeBlock>
              ) : (
                <Browser>
                  <Example onSubmit={() => {}} />
                </Browser>
              )}
              <CodeBlock lineNumbers={highlight}>{ExampleRaw}</CodeBlock>
            </div>
          </Section>
        ))}
      </section>
      <section>
        {[
          ["", "", "", false],
          ["basics", "3-36", "5-7", false],
          ["props", "3-7,13", "6", false],
          ["state", "1,8-9,20-21,25-26", "5-7", false],
          ["", "", "", true],
        ].map(
          ([step, highlightComponent, highlightParent, showMessages], idx) => (
            <Section chapter={CHAPTER} key={idx} section="Components">
              <TextBlock>
                <List active={step as string}>
                  <List.Step step="basics">
                    <b>Functional Component:</b> defined by a render function
                    <ul>
                      <li>Returns JSX to be rendered</li>
                      <li>
                        Gets called at least on every (props or state) change
                      </li>
                      <li>
                        Everything in function body gets recreated on every
                        render
                      </li>
                    </ul>
                  </List.Step>
                  <List.Step step="props">
                    <b>Props:</b> attributes of the component passed down from
                    parent
                  </List.Step>
                  <List.Step step="state">
                    <b>Hook:</b> Reusable component logic
                  </List.Step>
                  <List.Step step="state">
                    <b>State:</b> component state is managed using the useState
                    hook
                  </List.Step>
                </List>
                {showMessages && (
                  <Message.Container>
                    <Message type="antipattern">
                      <b>
                        Always evoke components from JSX, never call them as
                        functions!
                      </b>
                      <br />
                      <a
                        href="https://kentcdodds.com/blog/dont-call-a-react-function-component"
                        target="_blank"
                      >
                        <span className="flex gap-2">
                          <IconLink />
                          Kent C. Dodds - Don't call a React function component
                        </span>
                      </a>
                    </Message>
                  </Message.Container>
                )}
              </TextBlock>
              <div className="flex flex-col gap-4">
                <CodeBlock lineNumbers={highlightParent}>
                  {ExampleUsage}
                </CodeBlock>
                <CodeBlock lineNumbers={highlightComponent}>
                  {ExampleRaw}
                </CodeBlock>
              </div>
            </Section>
          ),
        )}
      </section>
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
      <section>
        {[
          ["", ""],
          ["Setup", "11,15,22,26"],
          ["Cleanup", "16-18"],
          ["Dependencies", "23,27"],
          ["", ""],
        ].map(([step, lineNumbers]) => (
          <Section chapter={CHAPTER} section="Component Effects">
            <TextBlock>
              <div className="w-3xl p-5">
                <CodeBlock inline>{"useEffect(setup, dependencies)"}</CodeBlock>
              </div>
              <List active={step}>
                <List.Step step="Setup">
                  <b>Setup</b> runs on mount and every re-render with changed
                  dependencies
                </List.Step>
                <List.Step step="Cleanup">
                  <b>Setup</b> can provide a <b>cleanup</b> funtion by returning
                  it
                </List.Step>
                <List.Step step="Cleanup">
                  <b>Cleanup</b> runs before setup on re-render and on unmount
                </List.Step>
                <List.Step step="Dependencies">
                  All props and states used in useEffect should be listed as
                  dependencies
                </List.Step>
              </List>
            </TextBlock>
            <div className="flex flex-col items-start gap-4">
              <CodeBlock lineNumbers={lineNumbers}>
                {ExampleUseEffect}
              </CodeBlock>
            </div>
          </Section>
        ))}
      </section>
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
