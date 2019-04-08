import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp';

class ParentComp extends PureComponent {

    constructor(props){
        super(props)

        this.state ={
            name: 'Vishwas'
        }
    }
    componentDidMount(){
        setInterval(() => {
        this.setState({
            name: 'Vihwas'
        })
    },2000)
    }
  render() {
      console.log('Parent component logs ')
    return (
      <div>
        Parent Component
        <MemoComp />
        {/* <RegComp name={this.state.name} //>         */}
        {/* <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp

