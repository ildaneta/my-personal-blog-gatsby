import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #f7a5a6;
  color: #fff;
  padding: 1.5rem 3rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.5s;
    cursor: pointer;

    &:hover {
      color: #f7a5a6;
    }
  }
`;
