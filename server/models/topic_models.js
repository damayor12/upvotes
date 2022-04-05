const mongoose = require('mongoose');

const topicsSchema = new mongoose.Schema({
  title: String,
  published_at: String,
  score: Number,
});



module.exports = mongoose.model('Titles', topicsSchema);
