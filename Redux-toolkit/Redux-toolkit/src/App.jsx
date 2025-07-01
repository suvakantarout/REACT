import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'

function App() {
  const [amount, setAmount] = useState(0);  //for the 'incrementByAmount' reducer function
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleresetClick(){
    dispatch(reset());
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br /> <br />
      <button onClick={handleresetClick}>Reset</button>
      <br /><br />
      <input 
        type="Number"
        value = {amount}
        placeholder='Enter amount'
        onChange={(e) => setAmount(e.target.value)}
      />
      {/* <br /> <br /> */}
      <button onClick={handleIncAmountClick}>Inc by ammount</button>
    </div>
  )
}

export default App


