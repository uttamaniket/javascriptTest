import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div>Age : <span>{this.props.age}</span></div>
        <button onClick= {this.props.onAgeUp}>Age up</button>
        <button onClick= {this.props.onAgeDown}>Age down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({type:'AGE_UP', value:5}),
    onAgeDown: () => dispach({type:'AGE_DOWN', value:5})
  }
}

export default connect(mapStateToProps,mapDispachToProps)(App);
