import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  padding: 25px;
  margin: 20px 30px 30px;
  width: 400px;
  align-items: center;
  justify-content: center;
  border: 0.05rem solid var(--colorBorder);
  border-radius: 0.25rem;

  ${media.lessThan("small")`
  width: 300px;
  height: 300px;
  margin: 2px;
  `};
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
`;

const Description = styled.text`
  font-family: "Montserrat", sans-serif;
  padding-top: 10px;
  font-size: 1.2rem;
  color: var(--colorLetters);
  letter-spacing: 1px;
  line-height: 25px;
  font-weight: 100;
`;

const Image = styled.img`
  height: 100%;
`;

export default {
  Container,
  Image,
  ContainerTitleDescription,
  Title,
  Description,
};
