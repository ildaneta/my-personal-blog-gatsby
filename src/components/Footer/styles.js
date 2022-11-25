import styled from "styled-components";
import colors from "../../styles/colors";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 20px 0;
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
`;

const ContainerSocialLinks = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
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
