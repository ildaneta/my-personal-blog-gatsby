import React from 'react';
import propTypes from 'prop-types';
import getThemeColor from '../../utils/getThemeColor';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
      <AniLink
        to={prevPage}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <ArrowLeft /> página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
      >
        próxima página
        <ArrowRight />
      </AniLink>
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
