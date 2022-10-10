import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.img`
  height: 23px;
  width: 23px;
  margin-left: 5px;
`;

const Text = styled.text`
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1rem;

  ${media.lessThan("medium")`
    font-size: 0.875rem;
  `}
`;

export default {
  Container,
  Image,
  Text,
};
