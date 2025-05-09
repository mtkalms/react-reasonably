import Browser from "@components/Browser";
import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";
import TextBlock from "@components/Block";

import exampleConstantsCode from "./examples/example-constants?raw"
import InteractiveExampleConstants from "./examples/InteractiveExampleConstants";

import exampleUseRefCode from "./examples/example-useRef?raw"
import ExampleUseRef from "./examples/example-useRef"

import exampleUseStateCode from "./examples/example-useState?raw"
import ExampleUseState from "./examples/example-useState"

import exampleUseReducerCode from "./examples/example-useReducer?raw"
import InteractiveExampleUseReducer from "./examples/InteractiveExampleUseReducer"

const CHAPTER = "State Management"
const TAGLINE = "Persist, if you must!"
const SECTION = [
  "Constants",
  "useRef",
  "useState",
  "useReducer",
  "useContext",
  "LocalStorage",
]

function StateManagementChapter() {

  return <>
    <Section chapter={CHAPTER} tagline={TAGLINE}/>
    <Section chapter={CHAPTER} tagline={TAGLINE}>
      <ul>
        {SECTION.map(section => <li>{section}</li>)}
      </ul>
    </Section>
    <Section chapter={CHAPTER} section="Constants">
      <TextBlock>
        <ul>
          <li>Temporarily stores values</li>
          <li>Resets on every <em>render</em></li>
          <li><em>Non-reactive:</em> does not trigger re-render</li>
          <li>Used to reuse <em>complex expressions</em></li>
        </ul>
        {/* <Message>
          <em>Common Code Smell:</em>  We commonly see functions used instead of constants. 
          In most cases, these are reminents from the days of component classes.
          As long as the expression only depends on props and states, there is no need to reevaluate it in between renders.
        </Message> */}
      </TextBlock>
      <div className="flex flex-col gap-4">
        <Browser>
          <InteractiveExampleConstants/>
        </Browser>
        <CodeBlock>
          {exampleConstantsCode}
        </CodeBlock>
      </div>
    </Section>
    <Section chapter={CHAPTER} section="useRef">
      <TextBlock>
        <ul>
          <li>Stores value over renders</li>
          <li>Resets on every <em>mount</em></li>
          <li><em>Non-reactive:</em> does not trigger re-render</li>
          <li>Used to reference <em>HTML elements</em> or as <em>instance variable</em></li>
        </ul>
      </TextBlock>
      <div className="flex flex-col gap-4">
        <Browser>
          <ExampleUseRef/>
        </Browser>
        <CodeBlock>
          {exampleUseRefCode}
        </CodeBlock>
      </div>
    </Section>
    <Section chapter={CHAPTER} section="useState">
      <TextBlock>
        <ul>
          <li>Stores value over renders</li>
          <li>Resets on every <em>mount</em></li>
          <li><em>Reactive:</em> triggers re-render when changed</li>
          <li>Used for primitives, lists and simple objects</li>
        </ul>
      </TextBlock>
      <div className="flex flex-col gap-4">
        <Browser>
          <ExampleUseState/>
        </Browser>
        <CodeBlock>
          {exampleUseStateCode}
        </CodeBlock>
      </div>
    </Section>
    <Section chapter={CHAPTER} section="useReducer">
      <TextBlock>
        <ul>
          <li>Stores value over renders</li>
          <li>Resets on every <em>mount</em></li>
          <li><em>Reactive:</em> triggers re-render when changed</li>
          <li>Used for complex state containers and transitions</li>
        </ul>
      </TextBlock>
      <div className="flex flex-col gap-4">
        <Browser>
          <InteractiveExampleUseReducer/>
        </Browser>
        <CodeBlock>
          {exampleUseReducerCode}
        </CodeBlock>
      </div>
    </Section>
    <Section chapter={CHAPTER} section={"useContext"}>
    </Section>
    <Section chapter={CHAPTER} section={"LocalStorage"}>
    </Section>
  </>
}

export default StateManagementChapter;