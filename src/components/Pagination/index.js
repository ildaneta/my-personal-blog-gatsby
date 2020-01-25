import React from 'react';
import { Link } from 'gatsby';
import propTypes from 'prop-types';

import { PaginationWrapper, ArrowLeft, ArrowRight } from './style';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage
}) => (
  <PaginationWrapper>
    {!isFirst && (
      <Link to={prevPage}>
        <ArrowLeft /> página anterior
      </Link>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <Link to={nextPage}>
        próxima página
        <ArrowRight />
      </Link>
    )}
  </PaginationWrapper>
);

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
};

export default Pagination;
