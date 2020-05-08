
/* NB. WE ARE USING ES2015 import syntax here. This is not supported by
NODE usually. However we are sending this code to WEBPACK then running it*/
import express from 'express'
import React from 'react'
// reactDom modules imported to be used to render 
// react jsx server side. This takes jsx and converts it to HTML
// on the server
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home';

const app = express();





// 
app.get('/', (req, res) => {
    const content = renderToString(<Home />)
    res.send(content)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})