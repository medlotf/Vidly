import React, { Component } from "react";
import Like from "./like";
import { Link } from "react-router-dom";

class TableBody extends Component {
  render() {
    const { listMovies, onDelete, onLike } = this.props;
    return (
      <tbody>
        {listMovies.map((m) => (
          <tr key={m._id}>
            <td><Link to={`/movie/${m._id}`}>{m.title}</Link></td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like liked={m.liked} onLike={() => onLike(m)} />
            </td>
            <td>
              <button
                className="btn btn-danger m-1"
                onClick={() => {
                  onDelete(m._id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
