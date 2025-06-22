import { createContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ChildA from './components/ChildA';


// STEPS:
// => Step: 1 (Create context)
// => Step: 2 (Wrap all the child inside a provider)
// => Step: 3 (Pass value)
// => Step: 4 (Consumer ke ander jake consume kr lo)


// Step: 1 (Create context)
const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // Step: 3 (Pass value)
  const [user, setUser] = useState({ name: "Suv" });
  const [theme, setTheme] = useState('light');

  // Step: 2 (Wrap all the child inside a provider)
  return (
    // Multiple Context provider
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id='container' style={{ backgroundColor: theme === 'light' ? "beige" : "black" }}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );

  // Old style (for reference only)
  // <UserContext.Provider value={user}>
  //   <ChildA />
  // </UserContext.Provider>
}

export default App;
export { UserContext };
export { ThemeContext };
