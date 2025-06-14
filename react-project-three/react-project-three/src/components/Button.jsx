import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.handelClick}>
                {props.text}
            </button>
        </div>
    )
}

export default Button
