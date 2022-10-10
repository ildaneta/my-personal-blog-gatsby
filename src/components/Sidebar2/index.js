import React, { useState } from "react";
import Language from "../Language";
import SocialLinks2 from "../SocialLinks2";
import Search from "../Search2";

import { Menu as MenuMobile } from "@styled-icons/heroicons-outline/Menu";
import { Close } from "@styled-icons/ionicons-outline/Close";

import IldaNetaLogo from "../../images/ildaneta.svg";

import Styled from "./styles";
import MenuLinks2 from "../MenuLinks2";

const Sidebar2 = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      <Styled.Container>
        <Styled.ContainerIconsText>
          <Styled.TextContact>Entre em contato</Styled.TextContact>

          <SocialLinks2 />
        </Styled.ContainerIconsText>

        <Styled.ContainerMenu>
          {isMenuOpened ? (
            <Styled.ContainerMenu2 onClick={() => setIsMenuOpened(false)}>
              <Styled.Label>Fechar</Styled.Label>
              <Close size={30} color="#222" />
            </Styled.ContainerMenu2>
          ) : (
            <Styled.ContainerMenu2 onClick={() => setIsMenuOpened(true)}>
              <Styled.Label>Menu</Styled.Label>
              <MenuMobile size={26} color="#222" />
            </Styled.ContainerMenu2>
          )}
        </Styled.ContainerMenu>

        <div className={isMenuOpened && "hideLanguage"}>
          <Language />
        </div>

        <Styled.Logo className={!isMenuOpened && "hideLogo"}>
          <img src={IldaNetaLogo} />
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
