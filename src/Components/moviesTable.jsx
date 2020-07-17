import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    { key: "like" },
    { key: "delete" },
  ];

  render() {
    const { listMovies, onDelete, onLike, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          sortColumn={sortColumn}
          onSort={onSort}
          columns={this.columns}
        />
        <TableBody
          listMovies={listMovies}
          onDelete={onDelete}
          onLike={onLike}
        />
      </table>
    );
  }
}

export default MoviesTable;
