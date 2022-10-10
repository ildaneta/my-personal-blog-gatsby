import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.nav`
  font-weight: 600;
  width: 80%;
  display: flex;
  margin-top: 20px;

  ${media.lessThan("medium")`
    padding-left: 16px;
    font-size: 14px;
  `};
`;

const MenuItem = styled.ul`
  margin-right: 16px;

  .active {
    color: var(--colorLetters);
    border-bottom: 2px solid var(--colorLetters);
  }
`;

const MenuLabel = styled(AniLink)`
  color: var(--colorLetters);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.5s;
`;

export default {
  Container,
  MenuItem,
  MenuLabel,
};
