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
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import'./appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import Fragment from './components/Fragment'
import Table from './components/Tables'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
{/*         
          <ErrorBoundary>
              <Hero heroName="Batman"></Hero>
          </ErrorBoundary>

              <ErrorBoundary>   
                 <Hero heroName="Superman"></Hero>
              </ErrorBoundary>
 
                
                <ErrorBoundary>   
                <Hero heroName="Joker"></Hero>

            </ErrorBoundary> */}
          {/* <p> */}
            
            {/* <PortalDemo /> */}
            {/* <FRParentInput /> */}
            {/* <FocusInput /> */}
            {/* <RefsDemo /> */}
            {/* <ParentComp /> */}
            {/* <Table /> */}
            {/* <Fragment /> */}
            {/* <LifecycleA /> */}
            {/* <Form /> */}
            {/* <h1 className='error'>Error</h1> */}
            {/* <h1 className={styles.success}>Success</h1> */}
            {/* <Inline /> */}
            {/* <Stylesheet /> */}
            {/* <NameList /> */}
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
          {/* </p>       */}
      </div>
    );
  }
}

export default App;
