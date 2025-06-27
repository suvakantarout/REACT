import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoggerComponent from './components/Logger';
import TimerComponent from './components/Timer';
import DataFetcher from './components/DataFetcher';
// import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //Usestate-Hook
  const [total, setTotal] = useState(1);

  // first => side-effect function
  // second => clean-up function
  // third => comma separated dependencies list
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  
  // variation: 1
  // Runs on every render
  // useEffect(() => {
  //   alert("I will run on each render");
  // })


  // Variation: 2
  // (No dependencies)Runs on first render
  // useEffect( () =>{
  //   alert("I will run on only first render");
  // }, [])


  //Variation: 3
  // (Single dependencies) Runs when each dependencies rendered
  // useEffect( () => {
  //   alert("I will run every time when count is upadated");
  // }, [count]);


  // Variation: 4
  // (Multiple dependencies) Runs when each dependencies rendered
  // useEffect( () => {
  //   alert("I will run every time when count/total is updated")
  // }, [count, total])


  // Variation: 5
  // Now lets add a cleanup function
  // useEffect( () => {
  //   alert("Count is updated");

  //   // Cleanup function => Runs When the component is unmounted from the app
  //   return () => {
  //     alert("Count is unmounted from UI");
  //   }
  // }, [count])




  // function handelCount(){
  //   setCount(count + 1);
  // }
  // function handelClickTotal(){
  //   setTotal(total + 1);
  // }

  return (
    <div>
      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      <DataFetcher />


      {/* <button onClick={handelCount}>
        Update count
      </button>
      <br /> <br />
      count is: {count}
      <br />
      <br />
      <button onClick={handelClickTotal}>
        Update total
      </button>
      <br /> <br />
      Total is: {total} */}
    </div>
  )
}

export default App
