// Child
import React from 'react'

const Card = (props) => { 
  return (
    <div>
      <input type="text" onChange={(e)=>  props.setName(e.target.value)}/>  {/* sync into the child}
      {/* <p>I am inside child component and value of name is: {props.name}</p> */}
    </div>
  )
}

export default Card
