import styled from 'styled-components';
import media from 'styled-media-query';

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem;

  /* Retirando as propagandas do disqus*/
  iframe[src*='ads-iframe'] {
    display: none;
  }

  iframe[src*='ads-iframe'] {
    ${media.lessThan('large')`
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  `}
  }

  #disqus_thread {
    a {
      color: var(--hover) !important;
    }

    p {
      color: var(--colorLettersComments) !important;
    }

    /* color: var(--colorLettersComments); */
  }
`;

export const CommentsTitle = styled.h2`
  color: var(--colorLettersComments);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;

  ${media.lessThan('large')`
    font-size: 1.375rem;
    color: var(--colorLettersComments);
  `}
`;
