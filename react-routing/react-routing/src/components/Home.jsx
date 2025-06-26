import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // ✅ add parentheses to call the hook

  function handleClick() { // ✅ typo fixed: 'handelClick' -> 'handleClick'
    navigate('/About');
  }

  return (
    <div>
      Home Page
      <br />
      <button onClick={handleClick}>
        Move to about page
      </button>
    </div>
  );
};

export default Home;
