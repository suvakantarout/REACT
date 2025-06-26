import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  function handelClick(){
      navigate('/Dashboard');
  }


  return (
    <div>
        About Page
        <br />
        <button onClick={handelClick}>
          Move to Dashboard
        </button>
    </div>
  )
}

export default About
