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
    genre: String,
    release_date: Number,
    duration: Number,
    image_url: String, 
}