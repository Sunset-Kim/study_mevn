// 쉬운미들웨어 설정
const express = require("express");
const app = express();
const PORT = 12010;

("/end");

// 1번로직
app.use((req, res, next) => {
  // 토큰로직
  console.log("1 Time:", Date.now());
  next();
});

app.use((req, res, next) => {
  // 로그를 남김
  console.log("2 Time:", Date.now());
  next();
});

app.use((req, res) => {
  // 뭔가 처리를 하고 리턴
  console.log("3 Time:", Date.now());
  res.end("sdf");
});

app.listen(PORT, () => {
  console.log(`서버가 생성되었습니다. ${PORT}`);
});
