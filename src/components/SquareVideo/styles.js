import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.a`
  padding: 15px;
  margin: 20px;
  width: 500px;
  align-items: center;
  justify-content: center;
  border: 0.05rem solid var(--colorBorder);
  border-radius: 0.25rem;
  text-decoration: none;

  ${media.lessThan("huge")`
    width: 350px;
  `};

  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--colorLetters);
  }
`;

const ContainerTitleDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.text`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  padding-top: 25px;
  color: var(--colorLetters);
  line-height: 1.5rem;
`;

const Description = styled.text`
  font-family: "Montserrat", sans-serif;
  padding-top: 10px;
  font-weight: 300;
  font-size: 1.1rem;
  color: var(--colorLetters);
  letter-spacing: 1px;
  line-height: 25px;
  font-weight: 300;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;

  border-radius: 5px;
`;

export default {
  Container,
  Image,
  ContainerTitleDescription,
  Title,
  Description,
};
