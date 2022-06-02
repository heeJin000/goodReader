const { createProxyMiddleware} = require('http-proxy-middleware');

module.exports = funtion(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'api요청 주소',
            pathRewrite: {
                '^/api': '',
            }
        })
    );
};