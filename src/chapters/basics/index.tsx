import Block from "../../components/Block";
import CodeBlock from "../../components/CodeBlock";
import Section from "../../components/Section";
import ExampleRaw from './example?raw';
import Example from './example';

const CHAPTER = "React Basics"

function BasicsChapter() {

  return <>
    <Section chapter={CHAPTER} section="JSX">
      <Block>
        <ul>
          <li>mew</li>
        </ul>
      </Block>
      <div className="flex flex-col gap-4">
        <Example/>
        <CodeBlock>
          {ExampleRaw}
        </CodeBlock>
      </div>
    </Section>
  </>
}

export default BasicsChapter;