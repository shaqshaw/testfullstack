const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:7070' }));
    app.use(proxy('/api/**', { target: 'http://localhost:7070' }));
};
