import styled from "styled-components";
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MenuBarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding: 0.8rem 0;
  right: 0;
  width: 3.75rem;
  height: 100vh;
  background: var(--mediumBackground);
  border-left: 1px solid var(--rose);

  transition: background 0.5s;

  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  .lightBulb {
    width: 25px;
    height: 27px;
  }

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`;

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--colorLetters);
    }
  }
`;

export const MenuBarItem = styled.span`
  color: var(--colorIcons);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &.light {
    color: var(--hover);

    &:hover {
      color: var(--rose);
    }
  }

  &:hover {
    color: var(--hover);
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  ${media.greaterThan("large")`
    &:hover {
      color: var(--hover);
    }
  `};

  ${media.lessThan("large")`
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`;
