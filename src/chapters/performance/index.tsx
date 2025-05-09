import Section from "@components/Section";

const CHAPTER = "Performance"
const TAGLINE = "Re-renders are not the problem"

function PerformanceChapter() {

  return <>
    <Section chapter={CHAPTER} tagline={TAGLINE}/>
    <Section chapter={CHAPTER} tagline={TAGLINE}>
      <ul>
      </ul>
    </Section>
  </>
}

export default PerformanceChapter;