var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  if (req.session.data == undefined) {
    req.session.data = [];
  }

  // let opt = {
  //   title: "Hello!",
  //   message: "これは新しいWebページです。"
  // };
  // router.get("/", function(req, res, next) {
  //   let name = req.query.name;
  //   let pass = req.query.pass;
  //   let msg = "name: " + name + "<br>password: " + pass;
  let opt = {
    title: "Hello!",
    data: req.session.data
  };
  res.render("hello", opt);
});

router.post("/", function(req, res, next) {
  //   let name = req.body.f1;
  //   let pass = req.body.f2;
  //   let msg = "name: " + name + "<br>password: " + pass;
  req.session.data.unshift(req.body.msg);
  let opt = {
    title: "Hello!",
    data: req.session.data
  };
  res.render("hello", opt);
});

module.exports = router;
