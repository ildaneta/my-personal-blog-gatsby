import React from "react";
import BrasilImg from "../../images/brasil.svg";

import Styled from "./styles";

const Language = () => {
  return (
    <Styled.Container>
      <Styled.Text>Idioma</Styled.Text>

      <Styled.Image
        src={BrasilImg}
        title="Português"
        alt="Idioma português do Brasil"
      />
    </Styled.Container>
  );
};

export default Language;
