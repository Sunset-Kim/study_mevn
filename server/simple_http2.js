// http 객체로 서버 만들기
const http = require("http");
const PORT = 12010;
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "application/json; charset=utf-8");
  const obj = {
    이름: "내이름은우영우",
  };
  res.end(JSON.stringify(obj));
});

server.listen(PORT);
