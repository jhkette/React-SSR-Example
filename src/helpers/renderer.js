/* NB. WE ARE USING ES2015 import syntax here. This is not supported by
NODE usually. However we are sending this code to WEBPACK then running it*/
import React from 'react';
// reactDom modules imported to be used to render 
// react jsx server side. This takes jsx and converts it to HTML
// on the server

import {renderToString} from 'react-dom/server';
import Home from '../client/components/Home';

// return home component with 'content' variable
// script is added at the bottom.
export default () => {
    const content = renderToString(<Home />);
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


