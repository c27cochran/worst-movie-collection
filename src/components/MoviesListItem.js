import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

const MoviesListItem = ({ movie }) => (
  <Col xs={12}>
    <div className="movie-list-item">
      <div className="title-date">
        <h3>{ movie.title }</h3>
      </div>
      <div className="movie-about">
        <p>ID: { movie.id }</p>
        <Link to={`movies/${movie.id}`}>View</Link>
      </div>
    </div>
  </Col>
);

MoviesListItem.propTypes = {
  movie: React.PropTypes.shape({
    title: React.PropTypes.string,
    genre: React.PropTypes.string,
    actors: React.PropTypes.string,
    rating: React.PropTypes.string,
    year: React.PropTypes.string,
  }).isRequired,
};

export default MoviesListItem;
