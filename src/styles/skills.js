import styled from 'styled-components';
import media from 'styled-media-query';

export const SkillsHeader = styled.h1`
  padding: 2rem 3rem 0;
  margin: 1rem auto;
  line-height: 3.2rem;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--colorLetters);
`;

export const SkillsLink = styled.a`
  ${media.greaterThan('large')`
  display: none; 
  `}

  ${media.lessThan('large')`
    color: var(--linkColor);
    text-decoration: none;
    transition: opacity 0.5s;
    font-weight: 300;
    border-bottom: 1px solid var(--linkColor);
    margin: 3rem;
    font-size: 1.3rem;

    &:hover {
      opacity: 0.9;
      border-bottom: 2px dotted var(--linkColor);
      color: var(--linkColor);
    }
  `}
`;
