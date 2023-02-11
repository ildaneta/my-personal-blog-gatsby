import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Container = styled.a`
  border: 1px solid var(--colorLetters);
  padding: 10px 25px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;

  &:hover {
    border-color: var(--rose);
  }
`;

const Label = styled(AniLink)`
  color: var(--colorLetters);
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    color: var(--rose);
  }
`;

export default {
  Container,
  Label,
};
