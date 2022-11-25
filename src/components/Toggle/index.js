import React from "react";
import { useThemeContext } from "../../context/Theme";
import Styled from "./styles";

const Toggle = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <Styled.ToggleWrapper>
      <Styled.Toggle
        type="checkbox"
        onChange={toggleTheme}
        checked={theme == "dark" ? true : false}
        defaultChecked={false}
      />
      <Styled.Slider />
    </Styled.ToggleWrapper>
  );
};

export default Toggle;
