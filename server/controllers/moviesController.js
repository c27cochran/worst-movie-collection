const knex = require('../db.js');

// Get movies for listview
exports.getAllMovies = (req, res) => {
  knex.select().from('movies')
    .then(response => (
      res.status(200).json(response)
    ))
    .catch(err => console.log('Error creating movie: ', err));
};

// Get a single movie
exports.getMovie = (req, res) => {
  const id = req.params.id;
  knex('movies').where('id', id)
    .then(response => (
      res.status(200).json(response)
    ))
    .catch(err => console.log('Error creating movie: ', err));
};

// Edit a movie
exports.editMovie = (req, res) => {
  const id = req.params.id;
  knex('movies').where('id', id).update(req.body)
    .then(response => (
      res.status(200).json(response)
    ))
    .catch(err => console.log('Error creating movie: ', err));
};

// Delete a movie
exports.deleteMovie = (req, res) => {
  const id = req.params.id;
  knex('movies').where('id', id).del()
    .then(response => (
      res.status(204).json(response)
    ))
    .catch(err => console.log('Error creating movie: ', err));
};

// Create a movie
exports.createMovie = (req, res) => {
  console.log('create: ', req.body);
  knex('movies').returning('id').insert(req.body)
    .then((id) => {
      knex('movies').where('id', id[0])
        .then(response => (
          res.status(201).json(response)
        ))
        .catch(err => console.log('Error creating movie: ', err));
    })
    .catch(err => console.log('Error creating movie: ', err));
};
