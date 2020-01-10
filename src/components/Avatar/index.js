import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AvatarWrapper } from './style'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <AvatarWrapper
      fixed={avatarImage.childImageSharp.fixed}
      alt="Imagem de avatar"
    />
  )
}

export default Avatar
