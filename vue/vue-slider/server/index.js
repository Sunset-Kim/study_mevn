const express = require("express");
const PORT = 12010;
const path = require("path");
const imgPath = path.join(__dirname, "./img");
const app = express();

const main = async () => {
  app.use("/img", express.static(imgPath));
  app.listen(PORT, () => {
    console.log(`${PORT}로 이미지 서버 실행중`);
  });
};

main();
