import React from "react";
import GlobalStyle from "../../styles/global";
import NavBar from "../NavBar";
import Sidebar2 from "../Sidebar2";

import Styled from "./styles";

const Layout2 = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Styled.Container>
        <Sidebar2 />

        <NavBar />
        {children}
      </Styled.Container>
    </div>
  );
};

export default Layout2;
