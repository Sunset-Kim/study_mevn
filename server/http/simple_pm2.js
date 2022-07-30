// 일부러 중지되는 서버
const http = require("http");
const PORT = 12010;
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "application/json; charset=utf-8");

  const obj = {
    이름: "내이름은우영우",
  };

  res.end(JSON.stringify(obj));
});

// 일부러 에러발생
setTimeout(() => {
  JSON.parse("{Z");
}, 1000);

server.listen(PORT, () => {
  console.log(`server runnig at http://127.0.0.1:${PORT}/`);
});
