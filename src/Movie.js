import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  render() {
    const { title, poster_path } = this.props;
    return (
      <div className="movie">
        <figure>
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
          <figcaption>
            <h2 className="movie__title">{title}</h2>
          </figcaption>
        </figure>
      </div>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

export default Movie;
