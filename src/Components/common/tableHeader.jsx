import React, { Component } from "react";

// colums array / sortColumn / onSort

class TableHeader extends Component {
  raiseSort = (sortElement) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.sortElement === sortElement) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.sortElement = sortElement;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.sortElement) return null;
    if (sortColumn.order === "asc") return <li className="fa fa-sort-asc"></li>;
    return <li className="fa fa-sort-desc"></li>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
