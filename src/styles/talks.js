import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`;

const ContainerTalks = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  width: 70%;
  line-height: 3.2rem;
  font-family: "Didact Gothic", sans-serif;
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--colorLetters);

  ${media.lessThan("huge")`
    margin-left: 100px;
    font-size: 1.8rem;
    line-height: 2rem;
    width: 400px;
  `};

  @media screen and (max-width: 1300px) {
    margin-left: 50px;
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  width: 1080px;
  margin-left: 20px;

  ${media.lessThan("huge")`
    max-width: 850px
  `}

  ${media.lessThan("medium")`
    width: 480px;
  `};
`;

const Divider = styled.div`
  margin-top: 100px;

  ${media.lessThan("huge")`
    margin-top: 60px;
  `}
`;

export default {
  Container,
  ContainerTalks,
  Title,
  ContainerTitle,
  Divider,
};
