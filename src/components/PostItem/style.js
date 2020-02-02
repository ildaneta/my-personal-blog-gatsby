import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  color: var(--colorLetters);
  display: flex;
  text-decoration: none;
  &:hover {
    color: var(--hover);
  }
`;

export const PostItemWrapper = styled.section`
  border-bottom: 1px solid var(--rose);
  padding: 2rem 2rem;
  width: 100%;
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: ${props => props.background};
  color: var(--colorLetters);
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 1.5rem;
  margin-bottom: 15px;
  flex-basis: auto;
  width: 90px;
  height: 40px;
`;

export const PostItemInfo = styled.div`
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  line-height: 1.2;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;
