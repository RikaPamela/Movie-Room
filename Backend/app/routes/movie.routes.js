module.exports = (app) => {
    const movie = require('../controllers/moviesController');

    // Create a new movie
    app.post('/movie', movie.create);

    // Retrieve all movies
    app.get('/movie', movie.findAll);

    // Retrieve a single Movie with movieID
    app.get('/movie/:movieId', movie.findOne);

    // Update a Movie with m
    app.put('/movie/:movieId', movie.update);

    // Delete a Note with noteId
    app.delete('/movie/:movieId', movie.delete);
}