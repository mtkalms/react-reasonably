import TextBlock from "@/components/Block";
import Message from "@/components/Message";
import Section from "@components/Section";

const CHAPTER = "Custom Components";
const TAGLINE = "Reusing Fragments";

function CustomComponentsChapter() {
  return (
    <>
      <Section chapter={CHAPTER} tagline={TAGLINE} />
      <Section chapter={CHAPTER} tagline={TAGLINE}>
        <ul>
          <li>Types of Components</li>
          <li>Composition</li>
          <li>Controlled Components</li>
          <li>Uncontrolled Components</li>
          <li>Higher Order Components (HOC)</li>
        </ul>
      </Section>
      <Section chapter={CHAPTER} section="Types of Components">
        <TextBlock>
          <p>
            <b>Deprecated</b>
          </p>
          <ul>
            <li>CreateClass Factory</li>
            <li>Mixin Pattern</li>
          </ul>
          <p>
            <b>Not recomended anymore</b>
          </p>
          <ul>
            <li>Class Component</li>
            <li>Higher-Order Component</li>
            <li>Render Props Pattern</li>
          </ul>
          <p>
            <b>Current</b>
          </p>
          <ul>
            <li>Functional Component</li>
            <ul>
              <li>Uncontrolled Component</li>
              <li>Controlled Component</li>
            </ul>
            <li>Server Component</li>
          </ul>
        </TextBlock>
      </Section>
      <Section chapter={CHAPTER} section="Composition">
        <TextBlock>
          <Message.Container>
            <Message type="antipattern">
              Never nest functional components!
            </Message>
          </Message.Container>
        </TextBlock>
      </Section>
    </>
  );
}

export default CustomComponentsChapter;
