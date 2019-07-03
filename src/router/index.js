import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../../src/App'
import Admin from '../../src/admin'
import Nomatch from '../pages/NoMatch'
import Button from '../pages/ui/Button'
import Modals from '../pages/ui/Modals'

class IRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <App>
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Button}></Route>
                                <Route path='/admin/ui/modals' component={Modals}></Route>
                                <Route component={Nomatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </App>
            </Router>
        );
    }
}

export default IRouter;