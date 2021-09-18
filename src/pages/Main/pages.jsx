// 路由path与页面组件的映射关系
import {lazy} from 'react';

export default {
  '/shopManage': lazy(() => import('./Admin/shopManage')), //门店列表
  '/salesmanManage': lazy(() => import('./Admin/salesmanManage')), //销售员列表
  '/salesCustManage': lazy(() => import('./Admin/salesCustManage')), //销售客户员列表
  '/orderManage': lazy(() => import('./Admin/orderManage')), //订单管理
};