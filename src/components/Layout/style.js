import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  display: flex;
`;

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 10px 3.75rem 0 21rem;
  width: 100%;

  body#grid & {
    grid-template-areas:
      'posts'
      'pagination';
  }
`;
