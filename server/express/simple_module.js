module.exports.handleBook = (req, res) => {
  console.log("req---------", req);
  console.log(req.params);
  res.send(req.params);
};

module.exports.intro = (req, res) => {
  res.send("우리의 Express로 만든 서버입니다!");
};

module.exports.html = (req, res) => {
  res.send("<p>some html</p>");
};
