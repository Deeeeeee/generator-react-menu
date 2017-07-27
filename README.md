# generator-react-menu
> 基于react+redux+react-router+es6+webpack的项目目录生成器

### 准备工具
* node 最新稳定版
* yeoman `npm install -g yo`

### 安装脚手架
`npm install generator-react-menu -g`

### 生成脚手架
```
mkdir reactApp
cd reactApp/
yo react-menu // 注意不能再加generator前缀，yeoman会自动匹配
```
> 命令成功执行后，reactApp文件夹中会生成项目目录


===================

### 运行项目
`node server.js`
	
### 打包命令
1. `npm run build-test`
2. `npm run build-pro`

### 代理配置
server.js

```javascript
const proxyOpts = proxy('/api',{
    target: 'http://xxx.xxx.com',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/api': ''
    },
    router: {
        'http://xxx.xxx.com': 'http://localhost:3000'
    }
});
app.use('/api', proxyOpts);
```

### 日志配置
src/store/configureStore.js

```javascript
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}
```

### TODO
1. 项目生成 区分移动端 & PC端
2.

