# generator-react-menu
> 基于react+redux+react-router+es6+webpack的项目目录生成器

### 安装
	npm install generator-react-menu

### 运行命令
node server.js
	
### 打包命令
1. `npm run build-test`
2. `npm run build-pro`

### 代理配置
server.js 默认localhost:8080

```
app.use(
'/service-core/web',
proxy('/',{
    target: 'http://localhost:8080',
    changeOrigin: true,
    ws: true,
}));
```

### 日志配置
src/store/configureStore.js

```
if (process.env.NODE_ENV === 'production') {
	module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}
```



