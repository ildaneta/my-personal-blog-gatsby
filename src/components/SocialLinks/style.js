import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  margin: 3rem 3rem 4rem 3rem;
  width: 100%;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: var(--colorIcons);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--hover);
  }
`;
export const IconWrapper = styled.div`
  fill: var(--colorIcons);
  width: 40px;
  height: 40px;
`;
