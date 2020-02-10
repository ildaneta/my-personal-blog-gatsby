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
    font-weight: 400;

    &:hover {
      opacity: 0.9;
      border-bottom: 2px dotted var(--linkColor);
      color: var(--linkColor);
    }
  `}
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 20px;
  margin-bottom: 3rem;
  svg {
    color: var(--iconColor);
    width: 40px;
    height: 40px;
    margin: 0.6rem 3rem;
  }
`;

export const SkillsItem = styled.li``;

export const SkillsWrapper = styled.div`
  background: var(--rose);
  margin-left: 10px;
  margin-top: 10px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  border-radius: 3px;
  align-items: center;
`;

export const SkillsLinkIcon = styled.a`
  height: 60px;
  display: flex;
  width: 60px;
  justify-content: center;
  align-items: center;
`;
