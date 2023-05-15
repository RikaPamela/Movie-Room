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
    age_rating: String,
    directors: String,
    genre: String,
    release_date: Number,
    duration: Number,
    Ratings: Number,
    trailer: String,
    image_url: String,
    background_url: String
}