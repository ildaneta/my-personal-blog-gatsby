import React from "react";

import menuLinks from "../../utils/content2";

import Styled from "./styles";

const MenuLinks2 = () => {
  return (
    <Styled.Container>
      {menuLinks.map((link) => (
        <Styled.MenuItem key={link.label}>
          <Styled.MenuLabel
            to={link.url}
            title={link.label}
            activeClassName="active"
            duration={0.6}
          >
            {link.label}
          </Styled.MenuLabel>
        </Styled.MenuItem>
      ))}
    </Styled.Container>
  );
};

export default MenuLinks2;
