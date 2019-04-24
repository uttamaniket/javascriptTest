import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.css'
import actionCreator from './Store/actions/actions'

export class MulReducer extends Component {
  render() {
    return (
      <div className='App'>
        <div className="col">
            <div><span>A:</span><span>{this.props.a}</span></div>
            <button onClick={() => this.props.upDateA(this.props.b)}>Update A</button>
            <button onClick = {() => this.props.ResetA}>Reset A</button>
        </div>
        <div className="col">
            <div><span>B:</span><span>{this.props.b}</span></div>
            <button onClick={() => this.props.upDateB(this.props.a)}>Update B</button>
            <button onClick = {() => this.props.ResetB}>Reset B</button>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        a: state.rA.a,
        b: state.rB.b
    }
}

const mapDispachToProps = (dispach) =>{
    return{
        upDateA: () => dispach(actionCreator.ageUp(1)),
        upDateB: () => dispach(actionCreator.ageDown(1)),
        ResetA : () => dispach({type: 'RESETA'}),
        ResetB : () => dispach({type: 'RESETB'})
    }
}
export default connect(mapStateToProps,mapDispachToProps)(MulReducer)
