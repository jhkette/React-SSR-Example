/* NB. WE ARE USING ES2015 import syntax here. This is not supported by
NODE usually. However we are sending this code to WEBPACK then running it*/
import React from 'react';
// reactDom modules imported to be used to render 
// react jsx server side. This takes jsx and converts it to HTML
// on the server

import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/Routes'
import {Provider} from 'react-redux';

// return 'routes' with 'content' variable
// script is added at the bottom. 
export default (req, store) => {
    const content = renderToString(
        // we are using static router here. This is from 
        // react-router-dom and used specifically for ssr. 
        // https://reacttraining.com/react-router/web/api/StaticRouter
        // we need to add the context and a location . The location param
        //is from the request object from express (passed in as an arguemnt on 
        // the index page). 
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
    );
    return `
        <html>
            <head>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
        `

}


