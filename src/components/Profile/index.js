import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from './style'
import Avatar from '../Avatar'

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
  `)

  return (
    <ProfileWrapper>
      <ProfileLink>
        <Avatar />
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
        <ProfileDescription>{description}</ProfileDescription>
      </ProfileLink>
    </ProfileWrapper>
  )
}

export default Profile
