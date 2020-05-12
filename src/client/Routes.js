import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList'


// The routes file. This get used by both the server react app
//  and the client react app. Using react-router-dom to add
// different components to different paths
export default () => {
    return(
        <div>
            <Route exact path ="/" component={Home} />
            <Route path ="/users" component={UsersList} />
        </div>
    )
}