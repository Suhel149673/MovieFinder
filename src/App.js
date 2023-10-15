import React, { Component } from 'react';
import axios from 'axios';

import Movies from './Movies';
import Search from './Search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: '',
    };
  }

  onInput = (value) => {
    this.setState({ query: value });
    this.searchMovie(value);
  };

  isSearched = (item) => {
    return !this.state.query || item.title.toLowerCase().includes(this.state.query.toLowerCase());
  };

  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;
    axios.get(url).then((response) => {
      this.setState({ movies: response.data.results });
    });
  }

  searchMovie(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
    axios.get(url).then((response) => {
      this.setState({ movies: response.data.results });
    });
  }

  componentDidMount() {
    this.getPopularMovies();
  }

  render() {
    return (
      <div className="app">
        <Search query={this.state.query} onInput={this.onInput} placeholder="Search for Movie Title …" />
        <Movies movies={this.state.movies.filter(this.isSearched)} />
      </div>
    );
  }
}

export default App;
