import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import getThemeColor from "../../utils/getThemeColor";

import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
  ImageAvatar,
  ContainerImageAvatar,
} from "./style";

import AvatarPNG from "../../images/avatar.jpeg";

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `);

  return (
    <ProfileWrapper>
      <ProfileLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to="/"
      >
        <ContainerImageAvatar>
          <ImageAvatar src={AvatarPNG} />
        </ContainerImageAvatar>
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
        <ProfileDescription>{description}</ProfileDescription>
      </ProfileLink>
    </ProfileWrapper>
  );
};

export default Profile;
