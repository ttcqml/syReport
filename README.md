## 目录结构说明

### /build
webpack构建后的代码存放目录

### /public
html模板文件和模块版本信息的json文件存放目录

### /src
源代码存放目录
#### /src/assets
静态资源存放目录
#### /src/components
公用组件存放目录
#### /src/libs
公用方法和库存放目录
#### /src/pages
与路由相关的页面组件，其中的目录结构路径与路由路径一一对应
##### /src/pages/Logoin
登录模块
##### /src/pages/Main
主页面模块
##### /src/pages/Main/pages.jsx
路由与页面组件的映射文件


## 新增菜单页或Tab页
1. 在/src/pages/Main/pages.jsx中新增相应的路由与页面组件的映射
2. 开发对应的页面组件