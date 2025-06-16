// Parent
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  //create state
  //manage state
  //change state
  //sabhii children se state ko sync krwadunga
  
  const [name, setName] = useState(''); //state created
  return (
    <div>
      <Card name={name} setName={setName}/>  {/*manage & change the state
      {/* <p>I am inside parent component and value of name is: {name}</p> */}
      <input type="text" value={name} onChange={(e)=>  props.setName(e.target.value)}/>
    </div>
  )
}

export default App
 