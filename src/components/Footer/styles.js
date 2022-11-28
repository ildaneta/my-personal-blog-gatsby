import styled from "styled-components";
import colors from "../../styles/colors";
import media from "styled-media-query";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 1rem;

  ${media.lessThan("medium")`
    padding-bottom: 0px;
  `}
`;

const Divider = styled.div`
  border: 0.5px solid ${colors.colorNeutral6};
`;

const ContainerLinks = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan("medium")`
    margin-bottom: 8px;
  `}
`;

const ContainerSocialLinks = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;

  ${media.lessThan("medium")`
    margin-top: 8px;
  `}
`;

const WrapperSocialLinks = styled.div`
  width: 300px;
  display: flex;
  align-self: center;
  justify-content: center;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${media.lessThan("large")`
    padding: 0 1rem;
    text-align: center;
    margin-bottom: 10px
  `}
`;

const WrapperFirstText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextBold = styled.text`
  color: var(--colorLetters);
  font-size: 14px;
  font-weight: 500;
`;

const Text = styled.text`
  color: var(--colorLetters);
  font-size: 14px;
`;

export default {
  Container,
  ContainerLinks,
  Divider,
  ContainerSocialLinks,
  WrapperSocialLinks,
  ContainerText,
  WrapperFirstText,
  TextBold,
  Text,
};
