import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux'
import { type } from 'os';
import Frontpage from './frontpage';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       message: 'Increment'
    }
  }
  
//   clickHandler=()=>{
//     this.setState({
//       count: this.state.count + 1
//     })
    
// }
  render() {
    console.log(this.state.count)
    return (
      <div className="App">
{/*        
       hello ------{this.props.name}<br></br>
       my age is {this.props.age}
        
        <h1>{this.props.user}</h1>
        <button onClick={this.props.update}>Click me</button><br></br>
        <button onClick={this.props.update1}>Click me1</button> */}
        <Frontpage />
      </div>
    );
  }
}

 function mapStateToProps(state){
   console.log("state",state)
   return{
  name : state.user.name,
  age : state.user.age,
  user : state.username.user
   }
}

function mapDispatchToProps(dispatch){
  console.log("hello")
  return{
    update: () =>{
        dispatch({ type : 'update_user', payload:{name:'aman', age: 40}})
        dispatch({ type : 'update_user1', payload:{name:'aman',age:400}})
    },
   update1: () =>{
    dispatch({ type : 'user', payload:'shiv'})
   } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
