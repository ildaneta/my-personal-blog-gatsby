import styled from 'styled-components';

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-SearchBox {
    padding-top: 6rem;
  }
  .ais-Stats {
    color: var(--colorLetters);
    margin-top: -12px;

    .ais-Stats-text {
      font-size: 0.8rem;
    }
  }

  .ais-SearchBox-form {
    display: flex;
    border: 1px solid var(--searchColor);
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
      border-left: 1px solid var(--searchColor);
      padding-left: 12px;
      width: 44px;
      cursor: pointer;

      svg {
        height: 1.2rem;
        width: 1.2rem;
        fill: var(--searchColor);

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
