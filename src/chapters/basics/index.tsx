import Block from "../../components/Block";
import CodeBlock from "../../components/CodeBlock";
import Section from "../../components/Section";

const CHAPTER = "React Basics"

function BasicsChapter() {
  return <>
    <Section chapter={CHAPTER} section="JSX">
      <Block>
        <ul>
          <li>mew</li>
        </ul>
      </Block>
      <CodeBlock>
        {"const codeTest = () => void;"}
      </CodeBlock>
    </Section>
  </>
}

export default BasicsChapter;