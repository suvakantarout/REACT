import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from "./components/LoginBtn"
import LogoutBtn from "./components/LogoutBtn"


function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  // Conditional Rendering using if-else
  // if(isLoggedIn){
  //     return(
  //       <LogoutBtn />
  //     )
  // }
  // else{
  //     return(
  //         <LoginBtn />
  //     )
  // }

  // Conditional Rendering using Ternary operator
  return (
    <div>
      {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
    </div>
  )

  // Conditional Rendering using Logical Operator
  // return(
  //   <div>
  //       {isLoggedIn && <LogoutBtn />}
  //   </div>
  // )
}

export default App
