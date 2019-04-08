import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props){
        super(props)

        this.state ={
            name: "Aniket"
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log("LifecycleA  shouldComponentUpdate")
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdat')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
   

    chageState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
  render() {
      console.log('LifecycleA render')
    return (
      <div>
        <div>Lifecycle A </div>
        <button onClick={this.chageState}> Change state</button> 
        <LifecycleB />      
      </div>
    )
  }
}

export default LifecycleA
