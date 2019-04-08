import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props){
        super(props)

        this.state ={
            name: "Aniket"
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log("LifecycleB  shouldComponentUpdate")
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getSnapshotBeforeUpdat')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
  
  render() {
      console.log('LifecycleB render')
    return (
      <div>
        Lifecycle B      
      </div>
    )
  }
}

export default LifecycleB
