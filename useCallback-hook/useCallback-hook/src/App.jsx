import { useCallback, useState } from 'react';
import './App.css';
import ChildComp from './components/ChildComp';

function App() {
  const [count, setCount] = useState(0);


  // Due to this useCallback() child component will not got re-render
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  
  return (
    <div>
      <div>count: {count}</div>
      <br />
      <button onClick={handleClick}>Increase count</button>
      <br /><br />
      <div>
        <ChildComp buttonName="Click me" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
