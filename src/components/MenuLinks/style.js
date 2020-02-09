import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.3rem;
  font-weight: 400;
  font-family: 'Didact Gothic', sans-serif;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--hover);
    font-weight: 400;
    border-bottom: 1px solid var(--hover);
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--colorLetters);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--hover);
  }
`;
