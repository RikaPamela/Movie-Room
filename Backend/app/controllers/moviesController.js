// // moviesController.js

// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const cors = require('cors');
// const Movie = require('./models/Movie');

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, 'public/images/');
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// router.use(cors());

// router.get('/', (req, res) => {
//   Movie.find((err, movies) => {
//     if (err) return res.status(500).send(err);
//     return res.status(200).send(movies);
//   });
// });

// router.post('/', upload.single('image'), (req, res) => {
//   const { name, description, ratings } = req.body;
//   const image = req.file.path;

//   const movie = new Movie({
//     name,
//     description,
//     ratings,
//     image
//   });

//   movie.save((err, movie) => {
//     if (err) return res.status(500).send(err);
//     return res.status(200).send(movie);
//   });
// });

// module.exports = router;
