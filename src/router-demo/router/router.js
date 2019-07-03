import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../main'
import Home from '../Home'
import About from '../About'
import Topics from '../Topics'
import Detail from '../Detail'
import NoMatch from '../NoMatch'

class Irouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <Main>
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route
                            // 1.<About></About>等价于component={About}，所以不用再写component={About}
                            // 2.注意：父路由写成：path='/about', 子路由则写成：path='/about/detail'
                            path='/about'
                            render={() => <About>
                                <Route path='/about/detail/:value' component={Detail}></Route>
                            </About>}
                        >
                        </Route>
                        <Route path='/topics' component={Topics}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Main>
            </Router>
        );
    }
}

export default Irouter;