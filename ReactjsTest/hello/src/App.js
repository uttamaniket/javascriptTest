import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
//import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components//Counter'
import FunctionClick from './components/FunctionClicks'
import ClassClick from './components/Class'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            <NameList />
            {/* <UserGreeting /> */}
            {/* <ParentComponent /> */}
            {/* <EventBind /> */}
            {/* Hello word */}
            {/* <FunctionClick /> */}
            {/* <ClassClick /> */}
            {/* <Greet name="Bruce" hero='Batman'/> */}
            {/* <p>The was dhjddkkhsdfffdfjlf</p> 
             <Greet name="Aniket" hero='Superman'/>
            <p>The wasvkjhfvfkkjjhgh</p>
            <Greet name="shiv" hero='Aquaman'/>
            <p>ir rhee ugrh grggugrehr</p>
            <Welcome name="Aniket" hero='Superman'/>
            <Welcome name="shiv" hero='Aquaman'/> */}
            {/* <Hello /> */}
            {/* <Welcome name="Bruce" hero='Batman'/> */}
            
            {/* <Message /> */}
            {/* <Counter /> */}
          </p>      
      </div>
    );
  }
}

export default App;
