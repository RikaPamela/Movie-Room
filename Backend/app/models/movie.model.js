module.exports = mongoose => {
  const Movie = mongoose.model(
    "movie",
    mongoose.Schema(
      {
        title: String,
        description: String,
        cast: String,
        Director: String,
        genre: String,
        release_date: Number,
        duration: Number,
        Ratings: Number,
        youtube_url: String,
        image_url: String,
        background_url: String
      },
    )
  );

  return Movie;
};