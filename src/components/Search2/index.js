import React from "react";
import { useThemeContext } from "../../context/Theme";

import { Search } from "@styled-icons/material-outlined/Search";

import Styled from "./styles";
import colors from "../../styles/colors";

const Search2 = () => {
  const { theme } = useThemeContext();
  return (
    <>
      <Styled.Button to="/search">
        <Search
          size={24}
          color={theme === "dark" ? colors.colorNeutral9 : colors.colorNeutral3}
        />

        <Styled.Input
          placeholder="Busque por um artigo"
          alt="Busque por um artigo"
          type="search"
        />
      </Styled.Button>
    </>
  );
};

export default Search2;
