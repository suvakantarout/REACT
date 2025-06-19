import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  function HandelClick() {
    alert("Button clicked");
  }
  function HandelPara() {
    alert("Mouse hovered on paragraph");
  }
  function PrintInputtedValue(e) {
    console.log("Value till now: ", e.target.value);
  }
  function SubmitButton(e) {
    // I am writting my custom behaviour down
    e.preventDefault();
    alert("Do you want to submit the form.");

  }

  return (
    <div>
      <button onClick={HandelClick}>
        Click me
      </button>
      <p onMouseOver={HandelPara} style={{ border: "1px solid black", cursor: "pointer" }}>My name is Suv.</p>

      <form action="input" onSubmit={SubmitButton}>
        <input type="text" onChange={PrintInputtedValue} />
        <button type='submit' style={{ cursor: "pointer" }}>Submit</button>
      </form>

      <br />


      {/* Dont write like this */}
      {/* <button onClick={alert("Button clicked")}>
          Click me
      </button> */}

      {/* Write like this */}
      <button onClick={() => alert("Button clicked")}>
        Click me
      </button>
    </div>
  )
}

export default App
