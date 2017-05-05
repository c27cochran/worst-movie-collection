import axios from 'axios';
import { browserHistory } from 'react-router';

export function getMovies() {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'FETCHING_MOVIES' });
    axios.get('http://localhost:8081/movies')
      .then(response => (
        dispatch({ type: 'FETCHED_MOVIES', payload: response.data })
      ))
      .catch((err) => {
        console.log('Error getting movies: ', err);
        dispatch({ type: 'MOVIE_ERROR' });
      });
  };
}

export function getMovie(id) {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'FETCHING_MOVIE' });
    axios.get(`http://localhost:8081/movies/${id}`)
      .then(response => (
        dispatch({ type: 'FETCHED_MOVIE', payload: response.data[0] })
      ))
      .catch((err) => {
        console.log(`Error getting movie ${id}: `, err);
        dispatch({ type: 'MOVIE_ERROR' });
      });
  };
}

export function submitForm(inputs) {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'SUBMIT_START' });
    const movie = { ...inputs };
    axios.post('http://localhost:8081/movies', movie)
      .then((response) => {
        const newMovie = response.data[0];
        dispatch({ type: 'SUBMIT_END', payload: newMovie });
        // Redirect the user to the newly created movie
        browserHistory.push(`/movies/${newMovie.id}`);
      })
      .catch((err) => {
        console.log('Error submitting: ', err);
        dispatch({ type: 'MOVIE_ERROR' });
      });
  };
}

export function editMovie() {
  return {
    type: 'EDIT_MOVIE',
  };
}

export function submitEdit(values, id) {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'EDIT_START' });
    // Create a new movie object
    const movie = { ...values };
    axios.put(`http://localhost:8081/movies/${id}`, movie)
      .then((response) => {
        const updatedMovie = JSON.parse(response.config.data);
        dispatch({ type: 'EDIT_COMPLETE', payload: updatedMovie });
      })
      .catch((err) => {
        console.log(`Error editing movie ${id}: `, err);
        dispatch({ type: 'MOVIE_ERROR' });
      });
  };
}

export function cancelEdit() {
  return {
    type: 'CANCEL_EDIT',
  };
}

export function deleteMovie(id) {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'DELETE_START' });
    axios.delete(`http://localhost:8081/movies/${id}`)
      .then((response) => {
        console.log('delete movie', response);
        // Redirect the user to the movies listview
        browserHistory.push('/movies');
        dispatch({ type: 'DELETE_COMPLETE' });
      })
    .catch((err) => {
      console.log(`Error deleting movie ${id}: `, err);
      dispatch({ type: 'MOVIE_ERROR' });
    });
  };
}
