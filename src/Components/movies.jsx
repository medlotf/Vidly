import React, { Component } from "react";
import Pagination from "./common/pagination";
import { getMovies } from "./../services/fakeMovieService";
import { paginate } from "./../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: "All Genres",
    pageSize: 4,
    currentPage: 1,
    sortColumn: { sortElement: "title", order: "asc" },
  };

  componentDidMount = () => {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  };

  handleDeleteMovie = (id) => {
    this.setState({
      movies: this.state.movies.filter((m) => m._id !== id),
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  HandleChangePage = (page) => {
    if (this.state.currentPage !== page) this.setState({ currentPage: page });
  };

  HandleItemSelect = (itemName) => {
    this.setState({ selectedGenre: itemName, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;
    const filtred =
      selectedGenre === "All Genres"
        ? allMovies
        : allMovies.filter((m) => m.genre.name === selectedGenre);

    const sorted = _.orderBy(
      filtred,
      [sortColumn.sortElement],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtred.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;
    if (count === 0) return <p>There are no movies in the database</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.HandleItemSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database</p>
          <MoviesTable
            listMovies={movies}
            onDelete={this.handleDeleteMovie}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onChangePage={this.HandleChangePage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
