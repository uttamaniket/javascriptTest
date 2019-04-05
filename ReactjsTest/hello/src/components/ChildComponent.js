import React, { Component } from 'react'

function ChildComponent(props) {
    return (
      <div>
        <button onClick= {() => props.greetHandler('ChildName')}>Greet Parent</button>      
      </div>
    )
  
}

export default ChildComponent
