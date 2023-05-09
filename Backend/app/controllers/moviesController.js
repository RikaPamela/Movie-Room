const Movie = require('../models/movies.model');

// Create and Save a new Movie
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Movie content can not be empty"
        });
    }

    // Create a Movie
    const Movie = new Movie({
        title: req.body.title || "Untitled Movie", 
        content: req.body.content
    });

    // Save Movie in the database
    Movie.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Movie."
        });
    });
};

// Retrieve and return all Movies from the database.
exports.findAll = (req, res) => {
    Movie.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single Movie with a MovieId
exports.findOne = (req, res) => {
    Movie.findById(req.params.movieId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.noteId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
};

// Update a Movie identified by the MovieId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Movie content can not be empty"
        });
    }
    // Find note and update it with the request body
    Movie.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Movie",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};

// Delete a Movie with the specified MovieId in the request
exports.delete = (req, res) => {
    Movie.findByIdAndRemove(req.params.noteId)
    .then(movie => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};


//https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/