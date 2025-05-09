import Section from "@components/Section";

const CHAPTER = "Custom Hooks"
const TAGLINE = "Reusing Logic";

function CustomHooksChapter() {

  return <>
    <Section chapter={CHAPTER} tagline={TAGLINE}/>
    <Section chapter={CHAPTER} tagline={TAGLINE}>
      <ul>
        <li>Return Signatures</li>
      </ul>
    </Section>
  </>
}

export default CustomHooksChapter;