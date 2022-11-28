import styled from "styled-components";
import media from "styled-media-query";

const ContainerAboutMe = styled.section`
  display: flex;
  flex-direction: row;
  padding: 0 135px;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;

  ${media.lessThan("large")`
    padding: 1rem;
    
  `}

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

const ContainerIllustration = styled.div`
  display: flex;
  align-self: flex-start;
  margin-right: 60px;

  ${media.lessThan("large")`
    margin-right: 0px;
  `};
`;

const Illustration = styled.img`
  width: 100%;
  margin-right: 30px;

  ${media.lessThan("large")`
    width: 450px;
  `};

  ${media.lessThan("medium")`
    width: 100%;
    margin-right: 16px
  `};
`;

const ContainerAboutMeText = styled.div`
  ${media.lessThan("large")`
    margin-top: 10px
  `};

  ${media.lessThan("medium")`
    width: 100%;
  `};
`;

const WelcomeTitle = styled.h6`
  color: var(--colorLetters);
  font-weight: 600;
  margin-bottom: 20px;
`;

const WelcomeDescription = styled.p`
  color: var(--colorLetters);
  padding-bottom: 20px;
`;

export default {
  ContainerAboutMe,
  Illustration,
  ContainerAboutMeText,
  WelcomeTitle,
  WelcomeDescription,
  ContainerIllustration,
};
