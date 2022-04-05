const mongoose = require('mongoose');

const topicsSchema = new mongoose.Schema({
  title: String,
  published_at: String,
  score: Number,
});

// abilities, species, height, weight

//db=pokedexx
//collection=PokemonList

module.exports = mongoose.model('Titles', topicsSchema);
