

### 运行命令
	node server.js
	
### 打包命令
	1. npm run build-test
	2. npm run build-pro

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

	```
	if (process.env.NODE_ENV === 'production') {
    	module.exports = require('./configureStore.prod')
	} else {
	    module.exports = require('./configureStore.dev')
	}
	```

#### TODO
    1. 同构/服务端渲染
    2. 去除运行 warning
    3. 增加生成 page & component 的命令
    4. 完善登录拦截 onEnter
    5. 

