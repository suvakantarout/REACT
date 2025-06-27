import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);  //Here val is an object (here due to 'useRef' when the value icrements it doesnot rerender the UI)
  let btnRef = useRef();  //btnRef is a reference variable/object for the color change button


  function handelClick(){
    val.current = val.current + 1;  //val.current => current value
    console.log("Value of val: ",val);
    setCount(count + 1);
  }

  // It will run on every render
  useEffect ( () => {
    console.log("i am rendered again");
  })


  function changeColor(){
    btnRef.current.style.backgroundColor = "plum";
  }

  return (
   <div>
      <button onClick={handelClick} ref={btnRef}>  {/* link the btnRef reference variable} */}
        Increment {count}
      </button> 

      <br />
      <br />

      <button onClick={changeColor}>
        Change color of 1st Button
      </button>
   </div>
  )
}

export default App
