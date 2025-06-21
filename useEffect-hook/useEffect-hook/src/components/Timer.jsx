import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);


  useEffect( () =>{
    const intervalId = setInterval(() => {
        console.log("Interval start");
        setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => {
        console.log("Time to stop");
        clearInterval(intervalId);
    };
  }, []);


  return (
    <div>
        <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
