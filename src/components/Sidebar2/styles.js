import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  display: flex;
  background-color: var(--sidebarBackground);
  padding: 18px 135px;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan("large")`
    padding: 1rem;

    .hideSearch {
      display: none;
    }

    `}
  .hideLanguage {
    display: none;
  }

  .hideLogo {
    display: none;
  }
`;

const ContainerIconsText = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 280px;

  ${media.lessThan("medium")`
    display: none
  `}
`;

const ContainerMenu = styled.div`
  display: flex;
  background-color: blue;

  ${media.greaterThan("medium")`
    display: none
  `}
`;

const ContainerMenu2 = styled.button`
  border-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: -10px;
`;

const ContainerMenuOpened = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--sidebarBackground);

  ${media.greaterThan("medium")`
    display: none
  `}
`;

const Label = styled.text`
  font-size: 0.5rem;
`;

const TextContact = styled.text`
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1rem;
  margin-right: 0.75rem;
  color: var(--colorLetters);

  ${media.lessThan("medium")`
    font-size: 0.875rem;
  `};
`;

const Logo = styled.div`
  ${media.greaterThan("medium")`
    display: none
  `}
`;

const ContainerContact = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 270px;
  margin-bottom: 40px;
  padding-left: 1rem;
`;

const Divider = styled.div`
  margin-top: 50px;
`;

const SearchMenuOpened = styled.div`
  padding-left: 1rem;
`;

export default {
  Container,
  ContainerIconsText,
  TextContact,
  ContainerMenu,
  ContainerMenu2,
  Label,
  ContainerMenuOpened,
  Logo,
  ContainerContact,
  Divider,
  SearchMenuOpened,
};
