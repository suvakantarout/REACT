import React, { useState } from 'react'
import './Counter.css'

const counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} time</p>
        <button id='btn' onClick={() => { setCount(count+1) }}>Click me</button>  {/* setCount(count+1) is a function which increases the count by 1 on each click of count button */}
    </div>
  )
}

export default counter;
