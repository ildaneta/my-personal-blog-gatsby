import React from "react";
import Button from "../components/Button";
import Layout2 from "../components/Layout2";
import Seo from "../components/seo";

import IllustraSVG from "../images/illustra-home.svg";

import Styled from "../styles/new";

const New = () => {
  return (
    <Layout2>
      <Seo title="Home" />

      <Styled.ContainerAboutMe>
        <Styled.ContainerIllustration>
          <Styled.Illustration src={IllustraSVG} alt="Illustration home" />
        </Styled.ContainerIllustration>

        <div>
          <Styled.ContainerAboutMeText>
            <Styled.WelcomeTitle>
              Seja bem vindo(a) ao meu blog!
            </Styled.WelcomeTitle>
            <Styled.WelcomeDescription>
              Meu nome é Ilda Neta. Sou desenvolvedora mobile 📱 e amo construir
              aplicações lindas e usuais, sempre tendo como foco a experiência
              do usuário.
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

          <Button label="Sobre mim" url="/aboutme" />
        </div>
      </Styled.ContainerAboutMe>

      <section>
        <h2>Artigos mais recentes</h2>
      </section>
    </Layout2>
  );
};

export default New;
