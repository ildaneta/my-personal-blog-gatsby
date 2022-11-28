import React from "react";
import GlobalStyle from "../../styles/global";
import NavBar from "../NavBar";
import Sidebar2 from "../Sidebar2";
import Footer from "../Footer";

import Styled from "./styles";

const Layout2 = ({ children }) => {
  return (
    <Styled.LayoutWrapper>
      <GlobalStyle />

      <Sidebar2 />

      <NavBar />

      <Styled.Container>{children}</Styled.Container>

      <Footer />
    </Styled.LayoutWrapper>
  );
};

export default Layout2;
