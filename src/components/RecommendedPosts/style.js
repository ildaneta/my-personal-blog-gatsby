import styled from 'styled-components';
import media from 'styled-media-query';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { ArrowRight } from '@styled-icons/remix-line/ArrowRight';
import { ArrowLeft } from '@styled-icons/remix-line/ArrowLeft';

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--rose);
  border-top: 1px solid var(--rose);
  background: var(--background);
  display: flex;
  justify-content: space-around;
`;

export const RecommendedLink = styled(AniLink)`
  background: var(--background);
  color: var(--colorLetters);
  display: flex;
  padding: 2rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 100%;
  justify-content: center;
  line-height: 21px;

  &:hover {
    background: var(--hoverRecommended);
    color: var(--white);
  }

  &.previous {
    border-right: 1px solid var(--rose);
    justify-content: flex-start;
    align-items: center;
  }

  &.next {
    justify-content: flex-end;
    align-items: center;
  }

  ${media.lessThan('large')`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}
`;

export const ArrowLeftt = styled(ArrowLeft)`
  color: var(--colorLetters);
  width: 19px;
  margin-right: 5px;

  &:hover {
    background: var(--hover);
    color: var(--hover);
  }
`;

export const ArrowRightt = styled(ArrowRight)`
  color: var(--colorLetters);
  width: 19px;
  margin-left: 5px;

  &:hover {
    background: var(--hover);
    background: var(--hover);
  }
`;
