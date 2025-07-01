import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"
import Button from "./components/Button"

function App() {
  // const [count, setCount] = useState(0);

  // function handelClick() {
  //   setCount(count + 1);
  // }
  return (
    //   <button incrementCount = {handelClick} text="click me">
    //     <h1>{count}</h1>
    //   </button>

    <Card name="Suv">
        <h1>My name is suv</h1>
        <p>I am studing in CV Raman Global University</p>
    </Card> 
  )
}

export default App
