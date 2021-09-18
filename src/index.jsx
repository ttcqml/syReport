import 'antd/dist/antd.css';
import './index.css';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const Login = lazy(() => import('./pages/Login'));
const Main = lazy(() => import('./pages/Main'));

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route component={Main} />
        </Switch>
      </Suspense>
    </HashRouter>
  </ConfigProvider>,
  document.getElementById('root')
);

window.addEventListener('popstate', e => {
  window.parent.postMessage({ type: 'popstate', href: location.href }, '*');
});
