import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AvatarWrapper } from './style';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 60
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  );

  return (
    <AvatarWrapper
      image={avatarImage.childImageSharp.gatsbyImageData}
      alt="Imagem de avatar"
    />
  );
};

export default Avatar;
