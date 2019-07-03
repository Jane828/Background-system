import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <span>
                获得的值：{this.props.match.params.value}
            </span>
        );
    }
}

export default Detail;