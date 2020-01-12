import React from 'react';
import Profile from '../Profile/index';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import { SidebarWrapper } from './style';

const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </SidebarWrapper>
);

export default Sidebar;
