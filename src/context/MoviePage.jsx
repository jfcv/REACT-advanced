import React, { Component, Fragment } from "react";
import MovieList from "./MovieList";
import MovieRow from "./MovieRow";

class MoviePage extends Component {
  render() {
    return (
      <Fragment>
        <MovieRow />
        <MovieList />
      </Fragment>
    );
  }
}

export default MoviePage;
