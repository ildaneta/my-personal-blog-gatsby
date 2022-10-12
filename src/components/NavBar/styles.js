import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 135px;
  width: 100%;

  ${media.lessThan("large")`
    padding: 0 1rem;

    .hideMenuLinks {
      display: none;
    }
  `}
`;

const ContainerLogo = styled.div`
  display: flex;
`;

const ContainerTema = styled.div`
  display: flex;
  align-items: center;
`;

const TemaTitle = styled.text`
  font-weight: 600;
  color: var(--colorLetters);
  margin-right: 5px;
`;

export default {
  Container,
  ContainerLogo,
  ContainerTema,
  TemaTitle,
};
