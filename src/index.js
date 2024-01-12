import React from 'react';
import { app ,use} from 'xadmin';
import TestWidget from "./TestWidget"
import TestPage from "./TestPage"


app.use({
  name: 'airiot.test',
  routers: {
    '/app/': { //注册这个页面的路由
      path: 'myTest',
      breadcrumbName: '我的测试组件页',
      component: TestPage
    },
  },
  //注册中台菜单 
  menuItems: [
    { title: _r('测试页'), url: '/app/myTest', icon: 'Report', permission: 'test.view' }
  ],
   //注册前台菜单
  frontMenuItems: [
    { title: _r('测试页'), url: '/app/myTest', icon: 'Report', permission: 'test.view' }
  ],
  dashboardWidgets: { //注册画面组件
    'test.widget111': TestWidget		// 定义一个唯一的key，注册widget		
  }
})