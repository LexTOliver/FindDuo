interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>{props.title}</button>
  );
}


function App() {
  return (
    <>
      <h1>Hello World from FindDuo!!</h1>
      <Button title="Opa"/>
    </>
  )
}

export default App
