import React, { Component } from 'react';
import './index.less'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='footer'>
                版权所有：Jane_Serry（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：Mr.Jane
            </div>
        );
    }
}

export default Footer;