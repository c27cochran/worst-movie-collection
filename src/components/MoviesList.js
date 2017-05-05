import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions/moviesActions';
import MoviesListItem from './MoviesListItem';
import Loading from './Loading';

class MoviesList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.length ?
            movies.map(movie => (
              <MoviesListItem movie={movie} key={movie.id} />
            ))
            : <Loading tryAgain={this.props.getMovies} />
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  getMovies: React.PropTypes.func.isRequired,
  movies: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    genre: React.PropTypes.string,
    actors: React.PropTypes.string,
    rating: React.PropTypes.string,
    year: React.PropTypes.string,
  })).isRequired,
};

const mapStateToProps = store => ({
  movies: store.movies.movies,
});

const mapDispatchToProps = dispatch => ({
  getMovies() {
    dispatch(getMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
