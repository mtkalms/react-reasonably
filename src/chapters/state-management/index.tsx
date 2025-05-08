import Browser from "@components/Browser";
import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";
import Block from "@components/Block";

import exampleConstantsCode from "./examples/example-constants?raw"
import InteractiveExampleConstants from "./examples/InteractiveExampleConstants";

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
      <Block>
        <ul>
          <li>Temporarily stores values</li>
          <li>Resets on every <b>render</b></li>
          <li>Does <b>not</b> trigger a rerender</li>
          <li>Usually used to reuse complex expressions</li>
        </ul>
        {/* <Message>
          <b>Common Code Smell:</b>  We commonly see functions used instead of constants. 
          In most cases, these are reminents from the days of component classes.
          As long as the expression only depends on props and states, there is no need to reevaluate it in between renders.
        </Message> */}
      </Block>

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
      <Block>
        <ul>
          <li>Stores values throughout renders</li>
          <li>Resets on every <b>mount</b></li>
          <li>Does <b>not</b> trigger a rerender</li>
          <li>Usually used to reference components</li>
        </ul>
      </Block>
    </Section>
    <Section chapter={CHAPTER} section="useState">
    </Section>
    <Section chapter={CHAPTER} section="useReducer">
    </Section>
    <Section chapter={CHAPTER} section={"useContext"}>
    </Section>
    <Section chapter={CHAPTER} section={"LocalStorage"}>
    </Section>
  </>
}

export default StateManagementChapter;