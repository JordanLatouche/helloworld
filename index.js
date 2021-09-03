const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const indexPath = './index.html';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(indexPath, (error, content) => {
      if (error) {
        res.end(error);
      } else {
        res.end(content,'utf-8');
      }
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});