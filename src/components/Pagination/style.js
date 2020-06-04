import styled from 'styled-components';
import media from 'styled-media-query';
import { ArrowBackIos } from '@styled-icons/material/ArrowBackIos';
import { ArrowForwardIos } from '@styled-icons/material/ArrowForwardIos';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid var(--rose);
  color: var(--white);
  padding: 1.5rem 3rem;

  ${media.lessThan('large')`
    font-size: .8rem;
    padding: 1rem;
  `}

  a {
    color: var(--colorLetters);
    text-decoration: none;
    transition: color 0.5s;
    cursor: pointer;

    &:hover {
      color: var(--hover);
    }
  }

  p {
    color: var(--colorLetters);
  }
`;

export const ArrowLeft = styled(ArrowBackIos)`
  color: var(--colorLetters);
  width: 12px;
  margin-right: 5px;

  &:hover {
    color: var(--hover);
  }
`;

export const ArrowRight = styled(ArrowForwardIos)`
  color: var(--colorLetters);
  width: 12px;
  margin-left: 5px;

  &:hover {
    color: var(--hover);
  }
`;
