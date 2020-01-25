import styled from 'styled-components';
import { Link } from 'gatsby';
import { ArrowRight } from 'styled-icons/remix-line/ArrowRight';
import { ArrowLeft } from 'styled-icons/remix-line/ArrowLeft';

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #f7a5a6;
  border-top: 1px solid #f7a5a6;
  background: #191921;
  display: flex;
  justify-content: space-around;
`;

export const RecommendedLink = styled(Link)`
  background: #191921;
  color: #f7a5a6;
  display: flex;
  padding: 2rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 100%;
  justify-content: center;
  line-height: 21px;

  &:hover {
    background: #38444d;
  }

  &.previous {
    border-right: 1px solid #f7a5a6;
    justify-content: flex-start;
    align-items: center;
  }

  &.next {
    justify-content: flex-end;
    align-items: center;
  }
`;

export const ArrowLeftt = styled(ArrowLeft)`
  color: #f7a5a6;
  width: 19px;
  margin-right: 5px;
`;

export const ArrowRightt = styled(ArrowRight)`
  color: #f7a5a6;
  width: 19px;
  margin-left: 5px;
`;
