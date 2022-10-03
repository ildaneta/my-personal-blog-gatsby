import React from "react";

import Styled from "./styles";

const SquareVideo = () => {
  const teste =
    "Utilizando o REM para construir layouts responsivos no React Native";

  const teste2 = "React Conf Brasil 🇧🇷 2020";
  return (
    <>
      <Styled.Container>
        <Styled.Image src="https://github.com/ildaneta.png" />

        <Styled.ContainerTitleDescription>
          <Styled.Title>{teste2}</Styled.Title>
          <Styled.Description>{teste}</Styled.Description>
        </Styled.ContainerTitleDescription>
      </Styled.Container>
    </>
  );
};

export default SquareVideo;
