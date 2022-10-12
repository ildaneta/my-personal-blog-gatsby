import React from "react";

import menuLinks from "../../utils/content";

import Styled from "./styles";

const MenuLinks2 = () => {
  return (
    <Styled.Container>
      {menuLinks.map((link) => (
        <Styled.MenuItem key={link.label}>
          <Styled.MenuLabel
            cover
            direction="right"
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