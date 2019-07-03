import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Link to='/about/detail/phz-828211'>我是关于</Link>
                <span style={{marginLeft: '50px'}}>
                    {this.props.children}
                </span>
            </div>
        );
    }
}

export default About;