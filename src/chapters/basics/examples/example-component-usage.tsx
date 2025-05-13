import ExampleComponent from "./example-component";

function ExampleComponentParent() {
  return <>
    <ExampleComponent
      onSubmit={(name,) => console.log(name)}
    />
  </>
}

export default ExampleComponentParent;