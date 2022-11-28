import React from "react";
import Layout2 from "../components/Layout2";

import IllustraSVG from "../images/illustra-home.svg";

import Styled from "../styles/new";

const New = () => {
  return (
    <Layout2>
      <Styled.ContainerAboutMe>
        <Styled.ContainerIllustration>
          <Styled.Illustration src={IllustraSVG} alt="Illustration home" />
        </Styled.ContainerIllustration>

        <Styled.ContainerAboutMeText>
          <Styled.WelcomeTitle>
            Seja bem vindo(a) ao meu blog!
          </Styled.WelcomeTitle>
          <Styled.WelcomeDescription>
            Meu nome é Ilda Neta. Sou desenvolvedora mobile 📱 e amo construir
            aplicações lindas e usuais, sempre tendo como foco a experiência do
            usuário.
          </Styled.WelcomeDescription>
          <Styled.WelcomeDescription>
            Além de produzir conteúdos em meu blog, estou ativamente
            compartilhando conhecimento no LinkedIn e em eventos de tecnologia
            como palestrante. 👩🏻‍🎤
          </Styled.WelcomeDescription>
          <Styled.WelcomeDescription>
            Para saber um pouco mais sobre mim e minha trajetória, clique
            abaixo. ⬇️
          </Styled.WelcomeDescription>
        </Styled.ContainerAboutMeText>
      </Styled.ContainerAboutMe>
    </Layout2>
  );
};

export default New;
