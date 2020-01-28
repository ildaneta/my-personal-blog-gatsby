import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AvatarWrapper } from './style';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <AvatarWrapper
      fixed={avatarImage.childImageSharp.fixed}
      alt="Imagem de avatar"
    />
  );
};

export default Avatar;
