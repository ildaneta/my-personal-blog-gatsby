import React from "react";
import MenuLinks2 from "../MenuLinks2";
import SocialLinks2 from "../SocialLinks2";

import { Copyright } from "@styled-icons/fa-regular/Copyright";

import Styled from "./styles";
import colors from "../../styles/colors";
import { useThemeContext } from "../../context/Theme";

const Footer = () => {
  const { theme } = useThemeContext;
  return (
    <Styled.Container>
      <Styled.ContainerLinks>
        <MenuLinks2 />
      </Styled.ContainerLinks>

      <Styled.Divider />

      <Styled.ContainerSocialLinks>
        <Styled.WrapperSocialLinks>
          <SocialLinks2 />
        </Styled.WrapperSocialLinks>
      </Styled.ContainerSocialLinks>

      <Styled.ContainerText>
        <Styled.WrapperFirstText>
          <Styled.Text
            style={{
              display: "flex",
              alignItems: "center",
              color:
                theme == "light" ? colors.colorNeutral4 : colors.colorNeutral11,
            }}
          >
            2019・2022
            <Copyright
              size={14}
              color={
                theme == "light" ? colors.colorNeutral4 : colors.colorNeutral11
              }
              style={{ marginLeft: 5 }}
            />
          </Styled.Text>

          <Styled.TextBold
            style={{ fontFamily: "Montserrat Alternates", marginLeft: 5 }}
          >
            Ilda
          </Styled.TextBold>

          <Styled.TextBold style={{ marginLeft: 5 }}>Neta.</Styled.TextBold>

          <Styled.Text style={{ marginLeft: 5 }}>
            Todos os direitos reservados.
          </Styled.Text>
        </Styled.WrapperFirstText>

        <Styled.Text>
          Este blog foi pensado e idealizado com muito carinho, utilizando o
          GatsbyJS.
        </Styled.Text>
      </Styled.ContainerText>
    </Styled.Container>
  );
};

export default Footer;
