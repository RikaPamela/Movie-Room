// request
export interface MovieRequest {
    movies: Movie[];
    total: number;
    skip: number;
    limit: number;
}



export interface Movie{
    id: any,
    title: String,
    description: String,
    cast: String,
    age_rating: String,
    director: String,
    actors: String,
    genre: String,
    release_date: Number,
    duration: Number,
    Ratings: Number,
    trailer: String,
    image_url: String,
    background_url: String
}

