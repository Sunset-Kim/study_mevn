// http 객체로 서버만들기 - string

const http = require("http");
const PORT = 12010;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Hello World!");
});

server.listen(PORT);
