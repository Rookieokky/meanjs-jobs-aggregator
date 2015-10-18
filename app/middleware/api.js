var cors = require('cors');

module.exports = function apiHeaders(req, res, next) {
    var corsOptions = {
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        allowedHeaders: 'X-Requested-With,Content-Type',
        credentials: true
    };
    cors(corsOptions)(req, res, next);
};