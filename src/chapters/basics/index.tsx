import TextBlock from "@components/Block";
import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";
import Browser from "@components/Browser";
import ExampleRaw from './examples/example-jsx?raw';
import Example from './examples/example-jsx';
import destructuring from './examples/example-destructuring?raw'
import initializer from './examples/example-initializer?raw'
import evaluation from './examples/example-evaluation?raw'

const CHAPTER = "React Basics"

function BasicsChapter() {

  return <>
    <Section chapter={CHAPTER}/>
    
    <Section chapter={CHAPTER}>
      <ul>
        <li>Common TypeScript Patterns</li>
        <li>JSX</li>
        <li>Components</li>
        <li>Component Props</li>
        <li>Component State</li>
        <li>Lifecycle Effects</li>
      </ul>
    </Section>
    <Section chapter={CHAPTER} section="Common Typescript Patterns">
      <TextBlock>
        <ul>
          <li><b>Short-Circuiting</b> for conditional evaluation</li>
          <li><b>Ternary Operator</b> for if-else cases</li>
          <li><b>Destructuring</b> to extract object entries</li>
          <li><b>Alias</b> to also rename the entry</li>
          <li><b>Rest Operator</b> to bundle the other entries</li>
          <li><b>Object Initializer</b> to create new object (from multiple others)</li>
          <li><b>Spread Operator</b> to apply all entries of object to another</li>
        </ul>
      </TextBlock>
      <div className="flex flex-col items-start gap-4">
        <span className="caption">
          Short-Circuiting + Ternary Operator
        </span>
        <CodeBlock>
          {evaluation}
        </CodeBlock>
        <span className="caption">
          Destructuring + Alias + Rest Operator
        </span>
        <CodeBlock>
          {destructuring}
        </CodeBlock>
        <span className="caption">
          Object Initializer + Spread Operator
        </span>
        <CodeBlock>
          {initializer}
        </CodeBlock>
      </div>
    </Section>
    <Section chapter={CHAPTER} section="JSX">
      <TextBlock>
        <ul>
          <li>JavaScript syntax extension for <b>{"<html>"}</b> like markup</li>
          <li>All attributes are in <b>camelCase</b> (class is <b>className</b>)</li>
          <li>Must always have exactly on root element</li>
          <li><b>{"<>"}</b> Fragments can be used as virtual root <b>{"</>"}</b></li>
          <li><b>{"{"}</b> JavaScript in curly braces (one-liners only) <b>{"}"}</b></li>
          <li>Custom components <b>{"<ExampleJSX/>"}</b></li>
          <li>All elements created in a loop need a unique <b>key</b> attribute</li>
        </ul>
      </TextBlock>
      <div className="flex flex-col gap-4">
        <Browser>
          <Example/>
        </Browser>
        <CodeBlock>
          {ExampleRaw}
        </CodeBlock>
      </div>
    </Section>
  </>
}

export default BasicsChapter;