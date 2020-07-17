import React from 'react';
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onChangePage }) => {
  let pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1)
    return null;
  let pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(p => (<li key={p} className={currentPage === p ? "page-item active" : "page-item"}><a onClick={() => onChangePage(p)} className="page-link">{p}</a></li>))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired
}

export default Pagination;