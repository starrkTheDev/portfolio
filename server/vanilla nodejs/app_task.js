const http = require('http');

const taskRoutes = require('./task-routes')

const server = http.createServer(taskRoutes);

server.listen(3000);