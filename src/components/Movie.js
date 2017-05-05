import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import { getMovie, editMovie, submitEdit, cancelEdit, deleteMovie } from '../actions/moviesActions';
import EditMovieForm from './EditMovieForm';
import Loading from './Loading';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.props.getMovie(id);
  }

  handleSubmit(values) {
    this.props.submitEdit(values, this.props.params.id);
  }

  render() {
    const movie = this.props.movies.currentMovie;
    const editing = this.props.movies.editing;
    const initialValues = {
      initialValues: {
        title: movie.title,
        genre: movie.genre,
        actors: movie.actors,
        rating: movie.rating,
        year: movie.year,
      },
    };

    if (movie && !editing) {
      return (
        <div className="movie-container">
          <div className="title-date">
            <h1>
              {movie.title}
            </h1>
            <p>Genre: {movie.genre}</p>
            <p>Actors: {movie.actors}</p>
            <p>Rated: {movie.rating}</p>
            <p>Year: {movie.year}</p>
          </div>
          <div className="movie-about">
            <ButtonGroup>
              <Button bsStyle="warning" onClick={this.props.editMovie}>Edit</Button>
              <Button bsStyle="danger" onClick={() => this.props.deleteMovie(this.props.params.id)}>Delete</Button>
            </ButtonGroup>
          </div>
        </div>
      );
    } else if (movie && editing) {
      return (
        <EditMovieForm
          movie={movie}
          onSubmit={this.handleSubmit}
          cancelEdit={this.props.cancelEdit}
          {...initialValues}
        />
      );
    } else {
      return (
        <Loading tryAgain={() => this.props.getMovie(this.props.params.id)} />
      );
    }
  }
}

Movie.propTypes = {
  getMovie: React.PropTypes.func.isRequired,
  editMovie: React.PropTypes.func.isRequired,
  submitEdit: React.PropTypes.func.isRequired,
  cancelEdit: React.PropTypes.func.isRequired,
  deleteMovie: React.PropTypes.func.isRequired,
  params: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
  }).isRequired,
  movies: React.PropTypes.shape({
    movies: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string,
      genre: React.PropTypes.string,
      actors: React.PropTypes.string,
      rating: React.PropTypes.string,
      year: React.PropTypes.string,
    })),
    fetching: React.PropTypes.bool,
    editing: React.PropTypes.bool,
    currentMovie: React.PropTypes.shape({
      title: React.PropTypes.string,
      genre: React.PropTypes.string,
      actors: React.PropTypes.string,
      rating: React.PropTypes.string,
      year: React.PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = store => ({
  movies: store.movies,
});

const mapDispatchToProps = dispatch => ({
  getMovie(id) {
    dispatch(getMovie(id));
  },
  editMovie() {
    dispatch(editMovie());
  },
  submitEdit(values, id) {
    dispatch(submitEdit(values, id));
  },
  cancelEdit() {
    dispatch(cancelEdit());
  },
  deleteMovie(id) {
    dispatch(deleteMovie(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
