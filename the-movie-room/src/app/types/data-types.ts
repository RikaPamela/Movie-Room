// request
export interface MovieRequest {
    products: movie[];
    total: number;
    skip: number;
    limit: number;
}



export interface movie{
    title: String,
    description: String,
    genre: String,
    release_date: Number,
    duration: Number,
    image_url: String, 
}