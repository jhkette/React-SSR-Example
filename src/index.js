// This is the node index.js page. It sets up the server that 
// renders the skeleton of the react application on the server side.


import 'babel-polyfill';
// import express and rendererr
import express from 'express'
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// initiate call express
const app = express();
// set public folder
app.use(express.static('public'))



// the renderer function comes from the helpers folder.
// using the wildcard for the get 'url' paramater here. This means
// express will handle and pass on any url request to renderer. The request
// object is passed down to the renderer function. 
app.get('*', (req, res) => {
    const store = createStore()
    res.send(renderer(req, store))
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})