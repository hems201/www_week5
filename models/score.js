var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  table: { type: String }
});

module.exports = mongoose.model("Score", ScoreSchema);
