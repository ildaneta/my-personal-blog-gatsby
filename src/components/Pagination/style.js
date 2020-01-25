import styled from 'styled-components';
import { ArrowBackIos } from 'styled-icons/material/ArrowBackIos';
import { ArrowForwardIos } from 'styled-icons/material/ArrowForwardIos';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #f7a5a6;
  color: #fff;
  padding: 1.5rem 3rem;

  a {
    color: #f7a5a6;
    text-decoration: none;
    transition: color 0.5s;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  p {
    color: #f7a5a6;
  }
`;

export const ArrowLeft = styled(ArrowBackIos)`
  color: #f7a5a6;
  width: 12px;
  margin-right: 5px;

  &:hover {
    color: #fff;
  }
`;

export const ArrowRight = styled(ArrowForwardIos)`
  color: #f7a5a6;
  width: 12px;
  margin-left: 5px;

  &:hover {
    color: #fff;
  }
`;
