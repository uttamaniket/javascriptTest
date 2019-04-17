import React, { Component } from 'react';
import './App.css';
import Example from './Nav';
import 'bootstrap/dist/css/bootstrap.css';
import Alertreact from './alert';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Example />
        <Alertreact />
      </div>
    );
  }
}

export default App;
