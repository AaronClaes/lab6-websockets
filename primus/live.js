exports.go = (server) => {
  var express = require("express");
  var router = express.Router();
  const Player = require("../models/Player");
  const Primus = require("primus");
  let primus = new Primus(server, {});
  primus.on("connection", (spark) => {
    console.log("we have a spark");

    spark.on("data", (data) => {
      Player.findOneAndUpdate(
        { player: `${data.player}` },
        {
          score: `${data.score}`,
        },
        {
          returnOriginal: false,
        },
        (err, doc) => {}
      );

      console.log(data);
      primus.write(data);
    });
  });
};
