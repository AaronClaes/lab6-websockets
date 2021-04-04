const mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema({
  player: String,
  score: Number,
});

const Player = mongoose.model("player", playerSchema);

module.exports = Player;
