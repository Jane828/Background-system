import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const { SubMenu } = Menu
class NavLeft extends Component {

    state = {
        menuTreeNode: '',
    }

    componentWillMount() {
        const MenuTree = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode: MenuTree
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <Link to={item.key}>{item.title}</Link>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default NavLeft
