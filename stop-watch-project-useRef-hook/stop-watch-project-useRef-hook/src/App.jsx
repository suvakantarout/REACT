import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);


  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time+1);
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer(0);
    setTime(0)
  }


  return (
    <div>
      <h2>STOPWATCH: {time} seconds</h2>

      <button onClick={startTimer}>
        Start
      </button>

      <br /> <br />

      <button onClick={stopTimer}>
        Stop
      </button>

      <br /> <br />

      <button onClick={resetTimer}>
        Reset
      </button>

    </div>
  )
}

export default App
