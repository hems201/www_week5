var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  table: [String]
});

module.exports = mongoose.model("Score", ScoreSchema);
