import styled from 'styled-components';
import media from 'styled-media-query';

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;

  ${media.lessThan('large')`
    padding: 0.5rem 1rem;
  `}

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 1rem;
  }

  .ais-SearchBox {
    padding-top: 6rem;

    ${media.lessThan('large')`
      padding-top: 1rem;
    `}
  }

  .ais-Stats {
    color: var(--colorLetters);
    margin-top: -12px;

    .ais-Stats-text {
      font-size: 0.8rem;
    }
  }

  body#grid & {
    .ais-Hits-list {
      background-color: var(--rose);
      border-bottom: 1px solid var(--rose);
      border-top: 1px solid var(--rose);
      display: grid;
      grid-area: card;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      margin-top: 2rem;
    }

    .ais-Hits-item {
      background-color: var(--background);
    }
  }

  .ais-SearchBox-form {
    display: flex;
    border: 1px solid var(--rose);
    border-radius: 2px;

    .ais-SearchBox-input {
      background: none;
      border: none;
      color: var(--inputColorSearch);
      display: flex;
      font-size: 1.3rem;
      padding: 0.5rem;
      width: 100%;

      &::placeholder {
        color: var(--placeholderSearch);
        font-size: 1.2rem;
      }
    }
    .ais-SearchBox-submit {
      display: flex;
      border: none;
      background: var(--background);
      background: var(--background);
      margin-left: -44px;
      border-left: none;
      border-right: none;
      border-left: 1px solid var(--rose);
      padding-left: 12px;
      width: 44px;
      cursor: pointer;

      svg {
        height: 1.2rem;
        width: 1.2rem;
        fill: var(--searchColor);
        margin: auto;

        &:hover {
          fill: var(--rose);
        }
      }
    }

    .ais-SearchBox-reset {
      display: none;
    }
  }
`;
