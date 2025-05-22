import TextBlock from "@/components/Block";
import List from "@/components/List";
import Message, { MessageContainer } from "@/components/Message";
import Section from "@components/Section";
import clsx from "clsx";
import ExampleControlled from "./examples/example-controlled";
import ExampleControlledRaw from "./examples/example-controlled?raw";
import ExampleMoreControlledRaw from "./examples/example-more-controlled?raw";
import ExampleUncontrolled from "./examples/example-uncontrolled";
import ExampleUncontrolledRaw from "./examples/example-uncontrolled?raw";
import ExampleMoreUncontrolledRaw from "./examples/example-more-uncontrolled?raw";
import Browser from "@/components/Browser";
import CodeBlock from "@/components/CodeBlock";
import ExampleCompositionWrongRaw from "./examples/example-composition-wrong?raw";
import ExampleCompositionWrongUsageRaw from "./examples/example-composition-wrong-usage?raw";
import ExampleCompositionMoreWrongRaw from "./examples/example-composition-more-wrong?raw";
import ExampleCompositionMoreWrongUsageRaw from "./examples/example-composition-more-wrong-usage?raw";
import ExampleCompositionRightRaw from "./examples/example-composition-right?raw";
import ExampleCompositionRightUsageRaw from "./examples/example-composition-right-usage?raw";
import ExampleCompositionWrongUsage from "./examples/example-composition-wrong-usage";
import ExampleCompositionMoreWrongUsage from "./examples/example-composition-more-wrong-usage";
import ExampleCompositionRightUsage from "./examples/example-composition-right-usage";
import Link from "@/components/Link";

const CHAPTER = "Custom Components";
const TAGLINE = "Reusing Fragments";

function CustomComponentsChapter() {
  return (
    <>
      <Section chapter={CHAPTER} tagline={TAGLINE} />
      <Section chapter={CHAPTER} tagline={TAGLINE}>
        <ul>
          <li>Types of Components</li>
          <li>Uncontrolled Components</li>
          <li>Controlled Components</li>
          <li>Composition</li>
          <li>Higher Order Components (HOC)</li>
        </ul>
      </Section>
      <section>
        {["", "interest"].map((step) => (
          <Section chapter={CHAPTER} section="Types of Components">
            <TextBlock>
              <List active={step}>
                <b className="-m-15">Deprecated</b>
                <List.Step className={clsx(step && "line-through")}>
                  CreateClass Factory
                </List.Step>
                <List.Step className={clsx(step && "line-through")}>
                  {" "}
                  Mixin Pattern
                </List.Step>
                <b className="-m-15">Not recomended anymore</b>
                <List.Step>Class Component</List.Step>
                <List.Step step="interest">Higher-Order Component</List.Step>
                <List.Step>Render Props Pattern</List.Step>
                <b className="-m-15">Current</b>
                <List.Step
                  step="interest"
                  className={clsx(step === "interest" && "text-green-500")}
                >
                  Functional Component
                </List.Step>
                <List.Step step="interest">Uncontrolled Component</List.Step>
                <List.Step step="interest">Controlled Component</List.Step>
                <List.Step step="interest">Composition Pattern</List.Step>
                <List.Step>Server Component</List.Step>
              </List>
            </TextBlock>
          </Section>
        ))}
      </section>
      <section>
        {["", "more"].map((step) => (
          <Section chapter={CHAPTER} section="Uncontrolled Component">
            <TextBlock>
              <b>Uncontrolled:</b> component controls it's own value
              <List>
                <List.Step pro>
                  <b>Performance:</b> avoids re-renders on input change
                </List.Step>
                <List.Step pro>
                  <b>Complexity:</b> no need for state management
                </List.Step>
                <List.Step contra>
                  <b>Predictability:</b> state is managed by native DOM elements
                </List.Step>
                <List.Step contra>
                  <b>Control:</b> much harder manipulate state
                </List.Step>
                <List.Step>
                  Typical props: <b>defaultValue</b> and callbacks
                </List.Step>
              </List>
            </TextBlock>
            {step == "more" ? (
              <div className="flex flex-col gap-4">
                <CodeBlock lineNumbers>{ExampleMoreUncontrolledRaw}</CodeBlock>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Browser>
                  <ExampleUncontrolled />
                </Browser>
                <CodeBlock lineNumbers>{ExampleUncontrolledRaw}</CodeBlock>
              </div>
            )}
          </Section>
        ))}
      </section>
      <section>
        {["", "more"].map((step) => (
          <Section chapter={CHAPTER} section="Controlled Component">
            <TextBlock>
              <b>Controlled:</b> parent controls components value
              <List>
                <List.Step pro>
                  <b>Predictability:</b> state is managed by React
                </List.Step>
                <List.Step pro>
                  <b>Control:</b> easy validation and conditional rendering
                </List.Step>
                <List.Step contra>
                  <b>Performance:</b> re-renders every time any input changes
                </List.Step>
                <List.Step contra>
                  <b>Complexity:</b> state managment for larger form get complex
                </List.Step>
                <List.Step>
                  Typical props: <b>value</b>, <b>onChange</b> and callbacks
                </List.Step>
              </List>
            </TextBlock>
            {step == "more" ? (
              <div className="flex flex-col gap-4">
                <CodeBlock lineNumbers>{ExampleMoreControlledRaw}</CodeBlock>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Browser>
                  <ExampleControlled />
                </Browser>
                <CodeBlock lineNumbers>{ExampleControlledRaw}</CodeBlock>
              </div>
            )}
          </Section>
        ))}
      </section>
      <section>
        {[
          ["wrong", false],
          ["wrong", true],
          ["more-wrong", false],
          ["more-wrong", true],
          ["right", false],
          ["right", true],
        ].map(([step, showCode]) => (
          <Section chapter={CHAPTER} section="Composition">
            <TextBlock>
              <List>
                <List.Step pro>
                  <b>Separation of Concerns:</b> avoids prop-drilling{" "}
                  <Link href="https://alexsidorenko.com/blog/react-prop-drilling-composition" />
                </List.Step>
                <List.Step pro>
                  <b>Performance:</b> children not re-rendered if parent changes{" "}
                  <Link href="https://alexsidorenko.com/blog/react-render-children-prop" />
                </List.Step>
              </List>
              <Message.Container>
                <Message type="antipattern">
                  Never nest functional components!
                </Message>
              </Message.Container>
            </TextBlock>
            {step === "wrong" && (
              <div className="flex flex-col gap-4">
                {showCode ? (
                  <CodeBlock lineNumbers start={11} end={15}>
                    {ExampleCompositionWrongUsageRaw}
                  </CodeBlock>
                ) : (
                  <Browser>
                    <ExampleCompositionWrongUsage />
                  </Browser>
                )}
                <CodeBlock lineNumbers end={41}>
                  {ExampleCompositionWrongRaw}
                </CodeBlock>
              </div>
            )}
            {step === "more-wrong" && (
              <div className="flex flex-col gap-4">
                {showCode ? (
                  <CodeBlock lineNumbers start={11} end={15}>
                    {ExampleCompositionMoreWrongUsageRaw}
                  </CodeBlock>
                ) : (
                  <Browser>
                    <ExampleCompositionMoreWrongUsage />
                  </Browser>
                )}
                <CodeBlock lineNumbers end={42}>
                  {ExampleCompositionMoreWrongRaw}
                </CodeBlock>
              </div>
            )}
            {step === "right" && (
              <div className="flex flex-col gap-4">
                {showCode ? (
                  <CodeBlock lineNumbers start={11} end={22}>
                    {ExampleCompositionRightUsageRaw}
                  </CodeBlock>
                ) : (
                  <Browser>
                    <ExampleCompositionRightUsage />
                  </Browser>
                )}
                <CodeBlock lineNumbers end={37}>
                  {ExampleCompositionRightRaw}
                </CodeBlock>
              </div>
            )}
          </Section>
        ))}
      </section>
      <Section chapter={CHAPTER} section="Higher-Order Component (HOC)">
        <TextBlock>
          <List>
            <List.Step>
              Takes a component as input and returns an enhanced version
            </List.Step>
            <List.Step>Can pass extra props to wrapped component</List.Step>
            <List.Step contra>
              <b>Prop confusion: </b> props defined on different levels
              <Link href="https://www.robinwieruch.de/react-hooks-higher-order-components/" />
            </List.Step>
            <List.Step contra>
              <b>Obsolete: </b>Largly superceded by hooks
            </List.Step>
          </List>
        </TextBlock>
        <MessageContainer>
          <Message type="info">
            <Link href="https://www.robinwieruch.de/react-higher-order-components/">
              Robin Wieruch - Higher-Order Components (HOC)
            </Link>
            <br />
          </Message>
        </MessageContainer>
      </Section>
    </>
  );
}

export default CustomComponentsChapter;
