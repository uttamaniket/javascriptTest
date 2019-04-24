import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
// import reducer1 from './Store/reducer1';
// import reducer2 from './Store/reducer2';
import reducer from './Store/reducers/reducer'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk"


// const logAction = store => {
//     return next => {
//         return action => {
//             const result = next(action)
//             console.log(`Caught in the middleware ${JSON.stringify(result)}`)
//             return result
//         }
//     }
// }

const store = createStore(reducer,applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
