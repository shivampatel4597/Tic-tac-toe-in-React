import React from 'react'
import "./square.css"
const Square = (props) => {
  return (
    <div onClick={props.onClick} className='sqr'>
        <h1>{props.value}</h1>
    </div>
  )
}

export default Square