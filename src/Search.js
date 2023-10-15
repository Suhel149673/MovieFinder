

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return (
      <form className="search">
        <input
          type="search"
          value={this.props.query}
          placeholder={this.props.placeholder}
          onChange={(e) => this.props.onInput(e.target.value)}
        />
      </form>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Search;
