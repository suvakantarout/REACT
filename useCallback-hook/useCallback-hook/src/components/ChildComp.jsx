import React from 'react';

const ChildComp = React.memo((props) => {
  console.log("Child component got re-rendered again");
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  );
});

export default ChildComp;


// React.memo -> wrap -> component -> component rerender tabhi hoga jab props change honge 
// nehi to rerender nehi hoga
