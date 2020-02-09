import styled from 'styled-components';
import media from 'styled-media-query';

export const PostHeader = styled.header`
  color: var(--colorLetters);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;

  ${media.lessThan('large')`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`;

export const PostTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan('large')`
    font-size: 2.5rem;
    line-height: 1.1;
    padding: 0 1rem;
    line-height: 1.9rem;
  `}
`;

export const PostDescription = styled.h2`
  font-size: 1.6rem;
  font-weight: 200;
  padding: 0 1.4rem;

  ${media.lessThan('large')`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`;

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  padding: 0 1.4rem;
  font-family: 'Didact Gothic', sans-serif;

  ${media.lessThan('large')`
    padding: 0 1rem;
    font-size: 0.9rem;
  `}
`;

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 3rem;
  font-family: 'Didact Gothic', sans-serif;

  ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
    font-family: 'Didact Gothic', sans-serif;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--colorLetters);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }

  blockquote {
    color: var(--white);
    border-left: 0.3rem solid var(--rose);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }

  h2 {
    font-size: 2.1rem;

    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }

  h3 {
    font-size: 1.6rem;

    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
      border-radius: 5px;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan('large')`
      padding: 0;
    `}
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    color: var(--linkColor);
    text-decoration: none;
    transition: opacity 0.5s;
    font-weight: 300;
    border-bottom: 1px solid var(--linkColor);

    svg {
      color: var(--white);
    }

    &:hover {
      opacity: 0.9;
      border-bottom: 2px dotted var(--linkColor);
      color: var(--linkColor);
    }
  }
`;
