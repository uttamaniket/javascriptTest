import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
// import MulReducer from './MulReducer';
import * as actionCreator from './Store/actions/actions'
import logo from './logo.svg'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/* <MulReducer /> */}
        <div>Age : <span>{this.props.age}</span></div>
        <button onClick= {this.props.onAgeUp}>Age up</button>
        <button onClick= {this.props.onAgeDown}>Age down</button>
        {this.props.loading && <img src={logo} className= 'App-logo' />}
        
        <div>History</div>
        <div>
          <ul>
            {
                this.props.history.map(el => (
                  <li className='historyItem'  onClick={() => this.props.onDelItem(el.id)}>
                    {el.age}
                  </li>
                ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
    loading: state.loading
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach(actionCreator.ageUp(1)),
    onAgeDown: () => dispach(actionCreator.ageDown(1)),
    onDelItem: (id) => dispach({type:'DEL_ITEM', key: id})
  }
}

export default connect(mapStateToProps,mapDispachToProps)(App);
