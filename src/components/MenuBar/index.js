import React, { useState, useEffect } from 'react';
import getThemeColor from '../../utils/getThemeColor';
import scrollToTop from '../../utils/scrollToTop';

import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular';
import { CodeSSlash as Skills } from '@styled-icons/remix-fill';
import { HomeHeart as Home } from '@styled-icons/boxicons-regular';
import { LightBulb } from '@styled-icons/octicons';
import { Lightbulb } from '@styled-icons/fa-solid';
import { Person } from '@styled-icons/evaicons-solid';
import { ArrowUpward as ArrowUp } from '@styled-icons/material';

import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem,
} from './style';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';

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
          to="/about/"
          title="Sobre mim"
        >
          <MenuBarItem>
            <Person className="aboutMe" />
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

        <MenuBarItem title="Ir para o topo" onClick={scrollToTop}>
          <ArrowUp />
        </MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  );
};
export default MenuBar;
