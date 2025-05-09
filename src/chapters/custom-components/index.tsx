import Section from "@components/Section";

const CHAPTER = "Custom Components"
const TAGLINE = "Reusing Fragments"

function CustomComponentsChapter() {
  return <>
    <Section chapter={CHAPTER} tagline={TAGLINE}/>
    <Section chapter={CHAPTER} tagline={TAGLINE}>
      <ul>
        <li>Composition</li>
        <li>Controlled Components</li>
        <li>Uncontrolled Components</li>
        <li>Higher Order Components (HOC)</li>
      </ul>
    </Section>
  </>
}

export default CustomComponentsChapter;