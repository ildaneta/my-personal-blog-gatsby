import styled from "styled-components";
import media from "styled-media-query";

import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileWrapper = styled.section`
  color: var(--colorLetters);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(AniLink)`
  color: var(--colorLetters);
  text-decoration: none;
  transition: color 0.5s;
  font-weight: 400;

  &:hover {
    color: var(--hover);
  }

  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.9rem auto 1.5rem;
  font-family: "Montserrat", sans-serif;
  color: var(--colorLetters);
  transition: color 0.5s;
  cursor: default;

  &:hover {
    color: var(--hover);
  }

  ${media.lessThan("large")`
    font-size: 1.3rem;
    margin: 0 0 0 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column
  `}
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.1rem;
  font-family: "Montserrat", sans-serif;
  margin-top: 3px;
  color: var(--colorLetters);
  cursor: default;

  transition: color 0.5s;
  &:hover {
    color: var(--hover);
  }

  ${media.lessThan("large")`
    font-size: 1rem;
    margin-top: 0.2rem;
    width: 300px;
  `}
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Montserrat Alternates", sans-serif;

  cursor: default;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const ImageAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  ${media.lessThan("large")`
    width: 60px;
    height: 60px;
  `}
`;

export const ContainerImageAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
