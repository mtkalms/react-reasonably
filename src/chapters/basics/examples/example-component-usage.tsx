import ExampleComponent from "./example-component";

function ExampleComponentParent () {
  return <>
    <h1>Login</h1>
    Please enter crendetials:
    <ExampleComponent onSubmit={(name,) => console.log(name)}/>
  </>
}

export default ExampleComponentParent;