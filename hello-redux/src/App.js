import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       message: 'Increment'
    }
  }
  
  clickHandler=()=>{
    this.setState({
      count: this.state.count + 1
    })
    
}
  render() {
    console.log(this.state.count)
    return (
      <div className="App">
       <p>{this.state.message}</p> 
       <p> {this.state.count}</p> 
       hello ------{this.props.name}
        <button onClick={this.clickHandler}>click me</button>
      </div>
    );
  }
}

 function mapStateToProps(state){
   console.log("state",state)
   return{
  name : state.user.name
   }
}

function mapDispatchToProps(state){
  
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
