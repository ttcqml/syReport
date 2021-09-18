import React, {Component, lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from 'antd';
const {Content} = Layout;
import {toString, getMenus, getNavs, getFirstPath} from 'libs/util';
import {get} from 'libs/request';
import pages from './pages';
import Sidebar from 'components/Sidebar';

const Error = lazy(() => import('./Error'));

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paths: {}, // 以path为键的菜单数据
      menus: [], // 用来创建菜单栏的数据
      routes: [], // 用来创建菜单相关的react路由的数据
    };
  }

  componentDidMount() {
    // 菜单集合
    let newMenu = [
      {
        id: "1",
        title: "门店列表",
        url: "/shopManage",
      },
      {
        id: "2",
        title: "销售员列表",
        url: "/salesmanManage",
      },
      {
          id: "3",
          title: "销售员客户列表",
          url: "/salesCustManage",
        },
      {
        id: "4",
        title: "订单管理",
        url: "/orderManage",
      }
    ];
    let obj = getMenus(newMenu, pages);
    this.setState(obj, () => this.redirect());
  }

  componentDidUpdate() {
    this.redirect();
  }

  redirect() {
    let {history, location} = this.props;
    let {menus} = this.state;
    let p = location.pathname;
    if (p === '/' || p === '/Main') {
      history.replace(menus[0].path)
    }
  }

  render() {
    let {menus, paths, routes} = this.state;
    let {location} = this.props;
    return <Layout style={{height: '100%'}}>
      <Sidebar location={location} menus={menus} paths={paths} pages={pages} />
      <Content style={{background: '#fff', borderLeft: '1px solid #f0f2f5'}}>
        {routes && routes.length ?
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">后台管理</Route>
              {routes.map(route => {
                let {Page} = route;
                let render = props => <Page {...props} pages={pages}/>;
                return <Route key={route.id} path={route.path} render={render}/>
              })}
              <Route><Error paths={paths} pages={pages} location={location}/></Route>
            </Switch>
          </Suspense> :
          '正在获取菜单...'
        }
      </Content>
    </Layout>;
  }
};
