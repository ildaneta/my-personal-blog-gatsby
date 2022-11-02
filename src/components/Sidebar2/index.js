import React, { useState } from "react";
import Language from "../Language";
import SocialLinks2 from "../SocialLinks2";
import Search from "../Search2";

import { Menu as MenuMobile } from "@styled-icons/heroicons-outline/Menu";
import { Close } from "@styled-icons/ionicons-outline/Close";

import IldaNetaLogo from "../../images/ildaneta.svg";
import IldaNetaLogoLight from "../../images/ildaneta-light.svg";

import Styled from "./styles";
import MenuLinks2 from "../MenuLinks2";
import { useThemeContext } from "../../context/Theme";
import colors from "../../styles/colors";

const Sidebar2 = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { theme } = useThemeContext();

  return (
    <>
      <Styled.Container>
        <Styled.ContainerIconsText>
          <Styled.TextContact>Entre em contato</Styled.TextContact>

          <SocialLinks2 />
        </Styled.ContainerIconsText>

        <Styled.ContainerMenu>
          {isMenuOpened ? (
            <Styled.ContainerMenuIcon onClick={() => setIsMenuOpened(false)}>
              <Styled.Label>Fechar</Styled.Label>
              <Close
                size={30}
                color={
                  theme === "dark" ? colors.colorNeutral6 : colors.colorNeutral2
                }
              />
            </Styled.ContainerMenuIcon>
          ) : (
            <Styled.ContainerMenuIcon onClick={() => setIsMenuOpened(true)}>
              <Styled.Label>Menu</Styled.Label>
              <MenuMobile
                size={26}
                color={
                  theme === "dark" ? colors.colorNeutral6 : colors.colorNeutral2
                }
              />
            </Styled.ContainerMenuIcon>
          )}
        </Styled.ContainerMenu>

        <div className={isMenuOpened && "hideLanguage"}>
          <Language />
        </div>

        <Styled.Logo className={!isMenuOpened && "hideLogo"}>
          {theme === "dark" ? (
            <img src={IldaNetaLogoLight} />
          ) : (
            <img src={IldaNetaLogo} />
          )}
        </Styled.Logo>

        <div className={"hideSearch"}>
          <Search />
        </div>
      </Styled.Container>

      {isMenuOpened ? (
        <Styled.ContainerMenuOpened>
          <MenuLinks2 />

          <Styled.Divider />

          <Styled.SearchMenuOpened>
            <Search />
          </Styled.SearchMenuOpened>

          <Styled.Divider />

          <Styled.ContainerContact>
            <Styled.TextContact className="menuOpened">
              Entre em contato
            </Styled.TextContact>

            <SocialLinks2 />
          </Styled.ContainerContact>
        </Styled.ContainerMenuOpened>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar2;
