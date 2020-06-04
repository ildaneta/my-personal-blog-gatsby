import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AvatarWrapper } from './style';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <AvatarWrapper
      fluid={avatarImage.childImageSharp.fluid}
      alt="Imagem de avatar"
    />
  );
};

export default Avatar;
