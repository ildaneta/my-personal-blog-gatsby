import React, { useState, useEffect } from 'react';
import getThemeColor from '../../utils/getThemeColor';
import scrollToTop from '../../utils/scrollToTop';

import { Grid } from '@styled-icons/feather/Grid';
import { FormatListBulleted as List } from '@styled-icons/material/FormatListBulleted';
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2';
import { CodeSSlash as Skills } from '@styled-icons/remix-fill/CodeSSlash';
import { HomeHeart as Home } from '@styled-icons/boxicons-regular/HomeHeart';
import { LightBulb } from '@styled-icons/octicons/LightBulb';
import { Lightbulb } from '@styled-icons/fa-solid/Lightbulb';
import { ArrowUpward as ArrowUp } from '@styled-icons/material/ArrowUpward';

import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem
} from './style';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  // the same of DidMount
  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          to="/"
          title="Ir para Home"
        >
          <MenuBarItem>
            <Home className="home" />
          </MenuBarItem>
        </MenuBarLink>

        <MenuBarLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          to="/search/"
          title="Pesquisar"
        >
          <MenuBarItem>
            <Search className="search" />
          </MenuBarItem>
        </MenuBarLink>

        <MenuBarLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          to="/skills/"
          title="Skills"
        >
          <MenuBarItem>
            <Skills className="skills" />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>

      <MenuBarGroup>
        <MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          {isDarkMode ? (
            <LightBulb className="light" />
          ) : (
              <Lightbulb className="light" className="lightBulb" />
            )}
        </MenuBarItem>

        <MenuBarItem
          title="Mudar visualização"
          className="display"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
          }}
        >
          {isListMode ? <Grid /> : <List className="list" />}
        </MenuBarItem>

        <MenuBarItem title="Ir para o topo" onClick={scrollToTop}>
          <ArrowUp />
        </MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  );
};
export default MenuBar;
