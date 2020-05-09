// This is the node index.js page. It sets up the server that 
// renders the skeleton of the react application on the server side.

// import express and rendererr
import express from 'express'
import renderer from './helpers/renderer';

// initiate call express
const app = express();
// set public folder
app.use(express.static('public'))


// get the index route
// the renderer function comes from helpers
app.get('/', (req, res) => {
    res.send(renderer())
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})