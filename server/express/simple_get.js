const expres = require("express");
const app = expres();
const PORT = 12010;

// middleware morgan
const logger = require("morgan");
app.use(logger("tiny"));
const simple_module = require("./simple_module");

app.get("/", (req, res, next) => {
  console.log("내가일단쿼리를 보겠다", req.query);
  next();
});
app.get("/", simple_module.intro);
app.get("/user/:userName/books/:bookName", simple_module.handleBook);
app.get("/test", simple_module.html);

app.listen(PORT);
