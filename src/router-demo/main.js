import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div style={{ display: "flex"}}>
                    <ul>
                        <li>
                            <Link to='/home'>首页</Link>
                        </li>
                        <li>
                            <Link to='/about'>关于</Link>
                        </li>
                        <li>
                            <Link to='/topics'>标题</Link>
                        </li>
                        <li>
                            <Link to='/imooc-1'>慕课1</Link>
                        </li>
                        <li>
                            <Link to='/imooc-2'>慕课2</Link>
                        </li>
                    </ul>
                    <div style={{ flex: 1, padding: "15px 70px" }}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;