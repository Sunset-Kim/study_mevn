const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();
const PORT = 12010;

const _path = path.join(__dirname, "./dist");
console.log(_path);

app.use("/dist", express.static(_path));
app.use(logger("tiny"));
app.use((req, res, next) => {
  console.log("요청이 왔네요! 지나가요~");
  next();
});

app.get("/book/:bookName", (req, res) => {
  const { bookName } = req.params;
  console.log(bookName);
  res.send(`안녕하세요! ${bookName}을 요청했습니다.`);
});

app.listen(PORT, () => {
  console.log(PORT, "is Running");
});
