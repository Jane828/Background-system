import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './common.less'
// import Home from './pages/home'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Row className='container'>
                <Col span='4' className='NavLeft'>
                    <NavLeft></NavLeft>
                </Col>
                <Col span='20' className='main'> 
                    <Header></Header>
                    <Row className='content'>
                        {/* <Home></Home> */}
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }
}

export default Admin;