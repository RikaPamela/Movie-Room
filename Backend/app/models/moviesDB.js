const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  cast: {
    type: [String],
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  trailer: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
