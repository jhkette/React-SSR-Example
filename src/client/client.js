// Startup point for client sided application
// The only thing that should be here is client logic - NEVER
//SERVER LOGIC

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers/';

const store = createStore(reducers, {}, applyMiddleware(thunk))

// console.log just to check javascript is running live in the browser
console.log('i just want to check if this is working')

// We are using hydrate as opposed to render here. 
// as we are adding to content that already exists(ie this is the
// react code for ssr)
// impporting routes and wrapping in BrowserRouter as per usual
// for routing
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)

