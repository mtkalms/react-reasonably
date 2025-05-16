import TextBlock from "@/components/Block";
import List from "@/components/List";
import Message from "@/components/Message";
import Section from "@components/Section";
import clsx from "clsx";
import ExampleControlled from "./examples/example-controlled"
import ExampleControlledRaw from "./examples/example-controlled?raw"
import ExampleMoreControlledRaw from "./examples/example-more-controlled?raw"
import ExampleUncontrolled from "./examples/example-uncontrolled"
import ExampleUncontrolledRaw from "./examples/example-uncontrolled?raw"
import ExampleMoreUncontrolledRaw from "./examples/example-more-uncontrolled?raw"
import Browser from "@/components/Browser";
import CodeBlock from "@/components/CodeBlock";

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
        {["", "interest"].map(step =>
          <Section chapter={CHAPTER} section="Types of Components">
            <TextBlock>
              <List active={step}>
                <b className="-m-15">Deprecated</b>
                <List.Step className={clsx(step && "line-through")}>CreateClass Factory</List.Step>
                <List.Step className={clsx(step && "line-through")}> Mixin Pattern</List.Step>
                <b className="-m-15">Not recomended anymore</b>
                <List.Step>Class Component</List.Step>
                <List.Step step="interest">Higher-Order Component</List.Step>
                <List.Step>Render Props Pattern</List.Step>
                <b className="-m-15">Current</b>
                <List.Step step="interest" className={clsx(step === "interest" && "text-green-500")}>
                  Functional Component
                </List.Step>
                <List.Step step="interest">Uncontrolled Component</List.Step>
                <List.Step step="interest">Controlled Component</List.Step>
                <List.Step step="interest">Composition Pattern</List.Step>
                <List.Step>Server Component</List.Step>
              </List>
            </TextBlock>
          </Section >
        )}
      </section >
      <section>
        {["", "more"].map(step =>
          <Section chapter={CHAPTER} section="Uncontrolled Component">
            <TextBlock>
              <b>Uncontrolled:</b> component controls it's own value
              <List>
                <List.Step pro><b>Performance:</b> avoids re-renders on input change</List.Step>
                <List.Step pro><b>Complexity:</b> no need for state management</List.Step>
                <List.Step contra><b>Predictability:</b> state is managed by native DOM elements</List.Step>
                <List.Step contra><b>Control:</b> much harder manipulate state</List.Step>
              </List>
            </TextBlock>{step == "more" ?
              <div className="flex flex-col gap-4">
                <CodeBlock lineNumbers>
                  {ExampleMoreUncontrolledRaw}
                </CodeBlock>
              </div>
              :
              <div className="flex flex-col gap-4">
                <Browser>
                  <ExampleUncontrolled />
                </Browser>
                <CodeBlock lineNumbers>
                  {ExampleUncontrolledRaw}
                </CodeBlock>
              </div>
            }
          </Section>
        )}
      </section>
      <section>
        {["", "more"].map(step =>
          <Section chapter={CHAPTER} section="Controlled Component">
            <TextBlock>
              <b>Controlled:</b> parent controls components value
              <List>
                <List.Step pro><b>Predictability:</b> state is managed by React</List.Step>
                <List.Step pro><b>Control:</b> easy validation and conditional rendering</List.Step>
                <List.Step contra><b>Performance:</b> re-renders every time any input changes</List.Step>
                <List.Step contra><b>Complexity:</b> state managment for larger form get complex</List.Step>
              </List>
            </TextBlock>
            {step == "more" ?
              <div className="flex flex-col gap-4">
                <CodeBlock lineNumbers>
                  {ExampleMoreControlledRaw}
                </CodeBlock>
              </div>
              :
              <div className="flex flex-col gap-4">
                <Browser>
                  <ExampleControlled />
                </Browser>
                <CodeBlock lineNumbers>
                  {ExampleControlledRaw}
                </CodeBlock>
              </div>
            }
          </Section>
        )}
      </section>
      <Section chapter={CHAPTER} section="Composition">
        <TextBlock>
          <Message.Container>
            <Message type="antipattern">
              Never nest functional components!
            </Message>
          </Message.Container>
        </TextBlock>
      </Section>
      <Section chapter={CHAPTER} section="Higher-Order Component (HOC)">
        <TextBlock>
        </TextBlock>
      </Section>
    </>
  );
}

export default CustomComponentsChapter;
