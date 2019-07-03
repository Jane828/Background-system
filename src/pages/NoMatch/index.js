import React, { Component } from 'react';
import './index.less'

class NoMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <h1 className='error-title'>
                Error: 404 Not Found Pages!
            </h1>
        );
    }
}

export default NoMatch;