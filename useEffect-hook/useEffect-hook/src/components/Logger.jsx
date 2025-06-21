import React, { useEffect, useState } from 'react'

const LoggerComponent = () => {
    const [count, setCount] = useState(0);

    // Runs on every render
    useEffect( () => {
        console.log("Component rendered or count clocked: ", count);
    })


    function countClicks(){
        setCount(count+1);
    }


  return (
    <div>
      <button onClick={countClicks}> 
        Clicked {count} times
      </button>
    </div>
  )
}

export default LoggerComponent
