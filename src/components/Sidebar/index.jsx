import s from './index.css';
import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {MenuOutlined} from '@ant-design/icons';
const {Sider} = Layout;
const {SubMenu} = Menu;
import {Link} from 'react-router-dom';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {menus, location, paths, pages} = this.props;
    let sks = paths ? Object.keys(paths).filter(path => RegExp(path).test(location.pathname)) : [];
    if (!location.oks) location.oks = sks.length ? sks : false;

    return <>
    <Sider className={s.sider} collapsible width={200} style={{background: '#fff'}}>
      {menus &&
      <Menu
        selectedKeys={sks}
        openKeys={location.oks}
        mode="inline"
        theme="dark"
        inlineIndent={12}
        onOpenChange={oks => {
          location.oks = oks;
          this.forceUpdate();
        }}
      >
        {
          menus.map(menu => {
            let getMenuItem = menu => (
              <Menu.Item icon={<MenuOutlined />} key={menu.path}>{pages[menu.path] ?
                <Link to={menu.path}>{menu.title}</Link> :
                menu.title
              }</Menu.Item>
            );

            return (menu.subMenus.length ?
                <SubMenu icon={<MenuOutlined />} key={menu.path} title={menu.title}>
                  {menu.subMenus.map(menu => getMenuItem(menu))}
                </SubMenu> :
                getMenuItem(menu)
            );
          })
        }
      </Menu>}
    </Sider>
    </>;
  }
};
