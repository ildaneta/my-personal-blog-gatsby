import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AvatarWrapper } from './style';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "jewelry.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
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
