import React from 'react';

import Icons from './icons';
import Links from './content';

import {
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper
} from './style';

const SocialLinks = () => (
  <SocialLinksWrapper>
    <SocialLinksList>
      {Links.map((link, index) => {
        const Icon = Icons[link.label];

        return (
          <SocialLinksItem key={index}>
            <SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </SocialLinksLink>
          </SocialLinksItem>
        );
      })}
    </SocialLinksList>
  </SocialLinksWrapper>
);

export default SocialLinks;
