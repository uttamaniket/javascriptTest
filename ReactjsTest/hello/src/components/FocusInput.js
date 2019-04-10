import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {
    constructor(){
        super() 
        this.componentRef = React.createRef()
    }

    clicckHandler = () => {
        this.componentRef.current.focusInput()
    }
    render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clicckHandler}>Focus Input</button>       
      </div>
    )
  }
}

export default FocusInput
