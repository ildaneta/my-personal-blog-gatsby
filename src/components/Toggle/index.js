import React, { useContext, useState } from "react";
import { useThemeContext } from "../../context/Theme";
import Styled from "./styles";

const Toggle = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Styled.ToggleWrapper>
      <Styled.Toggle type="checkbox" onChange={toggleTheme} />
      <Styled.Slider />
    </Styled.ToggleWrapper>
  );
};

export default Toggle;
