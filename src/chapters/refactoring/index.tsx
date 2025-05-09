import Section from "@components/Section";

const CHAPTER = "Refactoring"
const TAGLINE = "Class Components ↬ Functional Cmponents"

function RefactoringChapter() {

  return <>
    <Section chapter={CHAPTER} tagline={TAGLINE}/>
    <Section chapter={CHAPTER} tagline={TAGLINE}>
      <ul>
        <li>State ↬ useState</li>
        <li>Hook Functions ↬ useEffect</li>
      </ul>
    </Section>
  </>
}

export default RefactoringChapter;