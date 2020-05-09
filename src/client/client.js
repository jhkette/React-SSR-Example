// Startup point for client sided application
// The only thing that should be here is client logic - NEVER
//SERVER LOGIC

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// console.log just to check javascript is running live in the browser
console.log('i just want to check if this is working')

// We are using hydrate as opposed to render here. 
// as we are adding to content that already exists(ie this is the
// react code for ssr)
ReactDOM.hydrate(<Home />, document.querySelector('#root'))

