import TextBlock from "@components/Block";
import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";
import Browser from "@components/Browser";
import ExampleRaw from "./examples/example-component?raw";
import ExampleUsage from "./examples/example-component-usage?raw";
import destructuring from "./examples/example-destructuring?raw";
import initializer from "./examples/example-initializer?raw";
import evaluation from "./examples/example-evaluation?raw";
import ExampleUseEffect from "./examples/example-useEffect?raw";
import Message, { MessageContainer } from "@/components/Message";
import List from "@/components/List";
import Link from "@/components/Link";
import ExampleJSX from "./examples/example-jsx?raw";
import InteractivExampleJSX from "./examples/InteractiveExampleJSX";
import ExampleUseState from "./../state-management/examples/example-useState";
import ExampleUseStateRaw from "./../state-management/examples/example-useState?raw";
import LoginForm from "./examples/example-component";
import { IconLogin } from "@tabler/icons-react";

const CHAPTER = "React Basics";

function BasicsChapter() {
  return (
    <>
      <Section chapter={CHAPTER} />

      <Section chapter={CHAPTER}>
        <ul>
          <li>Why React?</li>
          <li>JSX</li>
          <li>Components</li>
          <li>Component Lifecycle</li>
          <li>Component State</li>
          <li>useEffect</li>
          <li>Common TypeScript Patterns</li>
        </ul>
      </Section>
      <Section chapter={CHAPTER} section="Why React?">
        <TextBlock>
          <ul>
            <li>Efficient DOM manipulation</li>
            <ul>
              <li>
                <b>Virtual DOM:</b> virtual copy of real DOM
              </li>
              <li>Content is added to or updated in the virtual DOM</li>
              <li>
                <b>Reconciliation:</b> Virtual DOM is synced with with real DOM
              </li>
            </ul>
            <li>Markup and component-based architecture</li>
            <ul>
              <li>
                <b>JSX:</b> Javascript language extension for <b>{"<html/>"}</b>
                -like markup
              </li>
              <li>
                Custom components that work like regular HTML element tags
              </li>
            </ul>
            <li>Extensive community and ecosystem</li>
            <ul>
              <li>React is currently by far the most popular web framework</li>
              <li>
                Countless well-maintained plugins, libraries and platforms
              </li>
            </ul>
          </ul>
        </TextBlock>
      </Section>
      <section>
        {[
          ["", ""],
          ["", "19-22,28-39"],
          ["camelCase", "19"],
          ["closed", "20,30,38"],
          ["root", "19,22"],
          ["fragment", "28,39"],
          ["inline", "20,21,31-37"],
          ["custom", "32-36"],
          ["key", "35, 31,37"],
          ["", ""],
        ].map(([step, highlight], idx) => (
          <Section chapter={CHAPTER} section="JSX" key={idx}>
            <TextBlock>
              <p>
                <b>Rules of JSX</b>
              </p>
              <List active={step as string}>
                <List.Step step="camelCase">
                  Use <b>camelCase</b> for all HTML attributes
                </List.Step>
                <List.Step step="camelCase">
                  class ↝ <b>className</b> (reserved word in JS)
                </List.Step>
                <List.Step step="closed">
                  <b>{"<em> "}</b>
                  Close all element tags
                  <b>{" </em>"}</b>
                </List.Step>
                <List.Step step="root">
                  Always return exactly <b>one</b> root element
                </List.Step>
                <List.Step step="fragment">
                  <b>{"<> "}</b>
                  Group elements with <b>Fragments</b> if necessary
                  <b>{" </>"}</b>
                </List.Step>
                <List.Step step="inline">
                  <b>{"{ "}</b> (one-line) JavaScript in curly braces
                  <b>{" }"}</b>
                </List.Step>
                <List.Step step="custom">
                  <b>{"<CustomComponents/>"}</b> are used like regular HTML
                  elements
                </List.Step>
                <List.Step step="key">
                  All elements created in a loop need a unique <b>key</b>{" "}
                  <Link
                    href="https://kentcdodds.com/blog/understanding-reacts-key-prop"
                    title="Kent C. Dodds - Understanding React's key prop"
                  />
                </List.Step>
              </List>
            </TextBlock>
            <div className="flex flex-col gap-4">
              <Browser>
                <InteractivExampleJSX />
              </Browser>
              <CodeBlock lineNumbers={highlight}>{ExampleJSX}</CodeBlock>
            </div>
          </Section>
        ))}
      </section>
      <section>
        {[
          ["", "", "", false],
          ["basics", "3-35", "6-10", false],
          ["props", "8,13,19", "7,9", false],
          ["state", "1,9-10,13,22-23,27-28", "7", false],
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
                    <ul>
                      <li>
                        <b>children:</b> refers to any thing between the tags
                      </li>
                      <li>
                        <b>key:</b> unique identifier of a child element
                        <ul>
                          <li>can be passed to any component</li>
                          <li>is not accessible from the component</li>
                        </ul>
                      </li>
                    </ul>
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
                      <b>Never call function components, render them!</b>
                      <br />
                      <Link href="https://kentcdodds.com/blog/dont-call-a-react-function-component">
                        Kent C. Dodds - Don't call a React function component
                      </Link>
                    </Message>
                  </Message.Container>
                )}
              </TextBlock>
              <div className="flex flex-col gap-4">
                {step === "" ? (
                  <Browser className="min-h-[312px]">
                    <LoginForm>
                      <div className="border(--primary) mb-5 border-b-2">
                        <IconLogin className="mx-1 -mt-[0.15lh] inline-block size-[0.9em] py-0 align-middle" />
                        Login
                      </div>
                    </LoginForm>
                  </Browser>
                ) : (
                  <CodeBlock lineNumbers={highlightParent}>
                    {ExampleUsage}
                  </CodeBlock>
                )}
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
            <li>3 phases of the component lifecycle</li>
            <ul>
              <li>
                <b>Mount: </b>
                Component is added to the screen
              </li>
              <li>
                <b>Update: </b>
                Component <b>re-renders</b> when states or props change
              </li>
              <li>
                <b>Unmount: </b>
                Component is removed from the screen
              </li>
            </ul>
            <li>
              Page refresh causes <b>remount</b> of all components
            </li>
          </ul>
        </TextBlock>
        <MessageContainer>
          <Message type="info">
            <Link href="https://react.gg/visualized">
              React.gg - React Visualized
            </Link>
          </Message>
        </MessageContainer>
        <div className="flex flex-col gap-4"></div>
      </Section>
      <Section chapter={CHAPTER} section="Component State">
        <TextBlock>
          <div className="w-5xl p-5">
            <CodeBlock inline>
              {"useState<T>(initial: T): [T, (T) => void]"}
            </CodeBlock>
          </div>
          <List>
            <List.Step>
              Returns a reference to the <b>value</b> and a <b>setter</b>{" "}
              function
            </List.Step>
            <ul>
              <List.Step>
                Both can be renamed in-place with <b>destructuring</b>
              </List.Step>
              <List.Step>
                <b>Setter function</b> triggers asynchronous update
              </List.Step>
              <List.Step>
                <b>Setter function</b> also accepts update function
              </List.Step>
            </ul>
            <List.Step>
              <b>Persistance:</b> resets only when component remounts
            </List.Step>
            <List.Step>
              <b>Reactive:</b> component re-renders when value changes
            </List.Step>
            <ul>
              <List.Step>Only performs shallow comparison</List.Step>
            </ul>
          </List>
        </TextBlock>
        <div className="flex flex-col gap-4">
          <Browser>
            <ExampleUseState />
          </Browser>
          <CodeBlock>{ExampleUseStateRaw}</CodeBlock>
        </div>
      </Section>
      <section>
        {[
          ["", ""],
          ["Setup", "11,15-23,27-28,32-33"],
          ["Cleanup", "20-23"],
          ["Dependencies", "12,24,29,34"],
          ["NoDep", "11-12"],
          ["Empty", "15-18,24"],
          ["Deps", "27-29,32-34"],
          ["", ""],
        ].map(([step, lineNumbers]) => (
          <Section chapter={CHAPTER} section="Component Effects">
            <TextBlock>
              <div className="w-3xl p-5">
                <CodeBlock inline>{"useEffect(setup, dependencies)"}</CodeBlock>
              </div>
              <List active={step}>
                <List.Step step="Setup">
                  <b>Setup</b> runs on mount and whenever dependecies change
                </List.Step>
                <List.Step step="Cleanup">
                  <b>Setup</b> can provide a <b>Cleanup</b> funtion by returning
                  it
                </List.Step>
                <List.Step step="Cleanup">
                  <b>Cleanup</b> runs on unmount and before <b>Setup</b>
                </List.Step>
                <List.Step step="Dependencies">
                  <b>Dependecies</b> lists all the states and props <b>Setup</b>{" "}
                  depends on
                </List.Step>
                <ul>
                  <List.Step step="NoDep">
                    <b>No list provided:</b> Setup runs on every render
                  </List.Step>
                  <List.Step step="Empty">
                    <b>Empty list provided:</b> Setup runs only once on mount
                  </List.Step>
                  <List.Step step="Deps">
                    <b>Dependecy list provided:</b> Setup runs only when
                    dependecies change
                  </List.Step>
                </ul>
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
