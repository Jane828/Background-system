import React, { Component } from 'react';
import { Card, Button, Radio, Icon } from 'antd';
import '../ui.less'
import './index.less'

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Loading: true,
            size: 'small'
        };
    }

    handleClickClose = () => {
        this.setState({
            Loading: false
        })
    }

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title='基础按钮' className='card-wrap'>
                    <Button type='primary'>imooc</Button>
                    <Button type='dashed'>imooc</Button>
                    <Button type='default'>imooc</Button>
                    <Button type='danger'>imooc</Button>
                    <Button type='ghost'>imooc</Button>
                    <Button disabled>imooc</Button>
                </Card>
                <Card title='图片按钮' className='card-wrap'>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card title='Loading按钮' className='card-wrap'>
                    <Button type='primary' loading={this.state.Loading}>确定</Button>
                    <Button type='primary' loading={this.state.Loading} shape='circle'></Button>
                    <Button loading={this.state.Loading} shape='circle'></Button>
                    <Button loading={this.state.Loading}>点击加载</Button>
                    <Button type='primary' onClick={this.handleClickClose}>关闭</Button>
                </Card>
                <Card title='按钮组' className='button-group'>
                    <Button.Group>
                        <Button type='primary'>
                            <Icon type='left' />
                            返回
                        </Button>
                        <Button type='primary'>
                            前进
                            <Icon type='right' />
                        </Button>
                    </Button.Group>
                </Card>
                <Card title='按钮尺寸' className='card-wrap'>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button type='primary' size={this.state.size}>imooc</Button>
                    <Button type='dashed' size={this.state.size}>imooc</Button>
                    <Button type='default' size={this.state.size}>imooc</Button>
                </Card>
            </div>
        );
    }
}

export default Buttons;