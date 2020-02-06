import React from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import { LayoutWrapper, LayoutMain } from './style';
import GlobalStyle from '../../styles/global';
import Sidebar from '../Sidebar/index';
import MenuBar from '../MenuBar/index';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <LayoutMain>{children}</LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
