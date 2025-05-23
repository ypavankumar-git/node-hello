const http = require('http');
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! altered final\n';
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://${host}:${port}`);
});
