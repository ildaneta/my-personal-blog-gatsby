import React from 'react'
import PropTypes from 'prop-types'

import { LayoutWrapper, LayoutMain } from './style'
import GlobalStyle from '../../styles/global'
import Sidebar from '../Sidebar/index'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
