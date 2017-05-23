

### 运行命令
	node server.js
	
### 打包命令
	1. npm run build-test
	2. npm run build-pro

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




