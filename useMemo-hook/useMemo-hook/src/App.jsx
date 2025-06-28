import { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function expensiveTask(num) {
    console.log("Inside expensive task");
    for (let i = 0; i <= 1000000000; i++) {} // smaller for demo
    return num * 2;
  }

  // let doubleValue = expensiveTask(input); // Due to this rendering is getting slow
    let doubleValue = useMemo(() => expensiveTask(input), [input])    // useMemo(() => calculatedValue, [dependencies])  


  return (
    <div>
      <button onClick={handleClick}>Click me {count}</button>
      <br /> <br />
      <input 
        type="number" 
        placeholder='enter number'
        value = {input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br /> <br />
      <div>
        Double: {doubleValue}
      </div>
    </div>
  );
}

export default App;
