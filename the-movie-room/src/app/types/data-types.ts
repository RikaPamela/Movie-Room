// request
export interface MovieRequest {
    movies: Movie[];
    total: number;
    skip: number;
    limit: number;
}



export interface Movie{
    title: String,
    description: String,
    cast: String,
    directors: String,
    genre: String,
    release_date: Number,
    duration: Number,
    Ratings: Number,
    youtube_url: String,
    image_url: String,
    background_url: String
}