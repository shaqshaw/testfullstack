import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Landing from './apps/staticweb/pages/landing/index.js';
import LogInSignUp from './apps/loginweb/pages/auth/index.js';
import Account from './apps/loginweb/account/index.js';

/* Group1 Routes */

/* Group2 Routes */


/* StaticWeb */
import About from './apps/staticweb/pages/about/index.js';

class App extends Component{

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path = "/" component={Landing}/>
                        <Route exact path="/auth" component = {LogInSignUp} />
                        <Route exact path="/account" component = {Account} />

                        {/* Group1 Routes */}
                        <Route exact path="/blah" component = {} />
                        <Route path="/blah/blah" component = {} />


                        {/* Group2 Routes */}
                        <Route exact path="/blahblah" component = {} />

                        {/* Static Routes */}
                        <Route exact path="/about" component = {About} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);