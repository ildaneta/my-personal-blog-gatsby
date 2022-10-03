import React from "react";
import Layout from "../components/Layout";
import SquareVideo from "../components/SquareVideo";

import Styled from "../styles/talks";

const Talks = () => {
  return (
    <Layout>
      <text>Participações no Youtube</text>
      <Styled.Container>
        <Styled.teste>
          <SquareVideo />
          <SquareVideo />
          <SquareVideo />
          <SquareVideo />
          <SquareVideo />
          <SquareVideo />
        </Styled.teste>
      </Styled.Container>
    </Layout>
  );
};

export default Talks;
