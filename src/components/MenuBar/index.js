import React from 'react';
import { Grid } from 'styled-icons/feather/Grid';
// import { List } from 'styled-icons/fa-solid/List';
// import { FileText2 as CV } from 'styled-icons/icomoon/FileText2';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
import { CodeSSlash as Skills } from 'styled-icons/remix-fill/CodeSSlash';
import { HomeHeart as Home } from 'styled-icons/boxicons-regular/HomeHeart';
import { GoLightBulb as Lightbulb } from 'react-icons/go';
import { ArrowUpward as ArrowUp } from 'styled-icons/material/ArrowUpward';

import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem
} from './style';

const MenuBar = () => (
  <MenuBarWrapper>
    <MenuBarGroup>
      <MenuBarLink to="/" title="Ir para Home">
        <MenuBarItem>
          <Home className="home" />
        </MenuBarItem>
      </MenuBarLink>

      <MenuBarLink to="/search/" title="Pesquisar">
        <MenuBarItem>
          <Search className="search" />
        </MenuBarItem>
      </MenuBarLink>

      <MenuBarLink to="/skills/" title="Skills">
        <MenuBarItem>
          <Skills />
        </MenuBarItem>
      </MenuBarLink>
    </MenuBarGroup>

    <MenuBarGroup>
      <MenuBarItem title="Mudar o tema">
        <Lightbulb className="light" />
      </MenuBarItem>

      <MenuBarItem title="Grid/Lista">
        <Grid />
      </MenuBarItem>

      <MenuBarItem title="Ir para o topo">
        <ArrowUp />
      </MenuBarItem>
    </MenuBarGroup>
  </MenuBarWrapper>
);

export default MenuBar;
