const express = require('express');
const movies = require('../controllers/moviesController');

const router = express.Router();

router.route('/').get(movies.getAllMovies);

router.route('/:id').get(movies.getMovie);

router.route('/:id').put(movies.editMovie);

router.route('/:id').delete(movies.deleteMovie);

router.route('/').post(movies.createMovie);


module.exports = router;
