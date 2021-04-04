var express = require("express");
var router = express.Router();
const Player = require("../models/Player");

/* GET home page. */
router.get("/", (req, res, next) => {
  Player.find({}, (err, doc) => {
    res.render("index", { data: doc });
  }).sort({ score: "desc" });
});

module.exports = router;
