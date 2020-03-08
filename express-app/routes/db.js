var express = require("express");
var router = express.Router();

// let sqlite3 = require("sqlite3").verbose();
// let db = new sqlite3.Database("mydata.db");
let dbutil = require("../db/all.js");

// router.get("/", function(req, res, next) {
//   let data = [];
//   db.all("SELECT * FROM persondata", (err, rows) => {
//     let opt = {
//       title: "Hello!",
//       data: rows
//     };
router.get("/", async (req, res, next) => {
  //   const sql = "SELECT * FROM persondata where id";
  //   let rows = await dbutil.getAllRows(sql);
  // let id = 1;
  // if (req.query.id != undefined) {
  //   id = req.query.id;
  // }
  let sql = "SELECT * FROM persondata";
  // db.get(sql, (err, row) => {
  let rows = await dbutil.getAllRows(sql);
  let opt = {
    title: "Hello!",
    sql: sql,
    data: rows
  };
  res.render("db", opt);
});

router.post("/", async (req, res, next) => {
  let sql = req.body.sql;
  let rows = await dbutil.getAllRows(sql);
  let opt = {
    title: "Hello!",
    sql,
    sql,
    data: rows
  };
  res.render("db", opt);
});

module.exports = router;
