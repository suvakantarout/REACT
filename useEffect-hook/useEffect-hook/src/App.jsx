import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0); //Usestate-Hook

  // first => side-effect function
  // second => clean-up function
  // third => comma separated dependenci list
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  
  // variation: 1
  // Runs on every render
  useEffect(() => {
    alert("I will run on each render");
  })

  function HandelCount(){
    setCount(count + 1)
  }


  return (
    <div>
      <button onClick={HandelCount}>
        Click me
      </button>
      <br />
      <br />
      count is: {count}
    </div>
  )
}

export default App
