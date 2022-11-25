import React from "react";
import MenuLinks2 from "../MenuLinks2";

import IldaNetaLogo from "../../images/ildaneta.svg";
import IldaNetaLogoLight from "../../images/ildaneta-light.svg";

import { MoonStars } from "@styled-icons/bootstrap/MoonStars";
import { MoonStarsFill } from "@styled-icons/bootstrap/MoonStarsFill";
import { Sun } from "@styled-icons/bootstrap/Sun";
import { SunFill } from "@styled-icons/bootstrap/SunFill";

import Styled from "./styles";
import Toggle from "../Toggle";
import { useThemeContext } from "../../context/Theme";
import colors from "../../styles/colors";

const NavBar = () => {
  const { theme } = useThemeContext();

  return (
    <Styled.Container>
      <Styled.ContainerLogo>
        <img
          src={theme == "dark" ? IldaNetaLogoLight : IldaNetaLogo}
          alt="Ilda Neta logo"
        />
      </Styled.ContainerLogo>

      <div className="hideMenuLinks">
        <MenuLinks2 />
      </div>

      <Styled.ContainerTema>
        <Styled.TemaTitle>Tema</Styled.TemaTitle>
        {theme === "dark" ? (
          <Sun color={colors.colorNeutral8} size={18} />
        ) : (
          <SunFill color={colors.colorNeutral2} size={18} />
        )}

        <Toggle />

        {theme === "dark" ? (
          <MoonStarsFill color={colors.colorNeutral0} size={18} />
        ) : (
          <MoonStars color={colors.colorNeutral0} size={18} />
        )}
      </Styled.ContainerTema>
    </Styled.Container>
  );
};

export default NavBar;
