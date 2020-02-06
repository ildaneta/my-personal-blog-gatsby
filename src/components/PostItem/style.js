import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  color: var(--colorLetters);
  display: flex;
  text-decoration: none;
  &:hover {
    color: var(--hover);
  }

  body#grid & {
    background-color: var(--background);
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`;

export const PostItemWrapper = styled.section`
  border-bottom: 1px solid var(--rose);
  padding: 2rem 2rem;
  width: 100%;

  body#grid & {
    border: var(--rose);
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: ${props => props.background};
  color: var(--white);
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 1.5rem;
  margin-bottom: 15px;
  flex-basis: auto;
  width: 90px;
  height: 40px;

  ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
`;

export const PostItemInfo = styled.div`
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  line-height: 1.2;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;
