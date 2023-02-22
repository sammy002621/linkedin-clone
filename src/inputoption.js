import React from 'react'
import './inputoption.css'
function inputoption({Icon,color,title}) {
  return (
    <div className='inputoption'>
        <Icon style={{color:color}}/>
      <h4>{title}</h4>
    </div>
  )
}

export default inputoption
