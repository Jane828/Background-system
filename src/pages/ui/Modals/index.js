import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import '../ui.less'

class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show1: false,
            show2: false,
            show3: false,
            show4: false
        };
    }

    handleshow = (type) => {
        this.setState({
            [type]: true
            // 加上[]之后，type是个变化的变量
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title:'信息确定框？',
            content: '你确定学会了react？',
            onOk(){
                console.log('onOk')
            },
            onCancel(){
                console.log('onCancel')
            }
        })
    }

    render() {
        return (
            <div>
                <Card title='模态框' className='card-wrap'>
                    <Button type='primary' onClick={() => this.handleshow('show1')}>Open</Button>
                    <Button type='primary' onClick={() => this.handleshow('show2')}>自定义页脚</Button>
                    <Button type='primary' onClick={() => this.handleshow('show3')}>顶部20px弹框</Button>
                    <Button type='primary' onClick={() => this.handleshow('show4')}>水平垂直居中</Button>
                </Card>
                <Card title='信息框' className='card-wrap'>
                    <Button type='primary' onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal
                    title='React1'
                    visible={this.state.show1}
                    onCancel={() => this.setState({
                        show1: false
                    })}
                >
                    欢迎光临！
                </Modal>
                <Modal
                    title='React2'
                    visible={this.state.show2}
                    okText='好的'
                    cancelText='算了'
                    onCancel={() => this.setState({
                        show2: false
                    })}
                >
                    欢迎光临！
                </Modal>
            </div>
        );
    }
}

export default Modals;