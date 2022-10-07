import React from "react";
import Layout from "../components/Layout";
import SquareVideo from "../components/SquareVideo";
import { talks, participations } from "../utils/talks";

import Styled from "../styles/talks";

const Talks = () => {
  return (
    <Layout>
      <Styled.Container>
        <Styled.ContainerTitle>
          <Styled.Title>Talks</Styled.Title>
        </Styled.ContainerTitle>

        <Styled.ContainerTalks>
          {talks.map((talk) => (
            <SquareVideo
              key={talk.id}
              description={talk.description}
              title={talk.title}
              url={talk.url}
              imageURI={talk.imageURI}
            />
          ))}
        </Styled.ContainerTalks>

        <Styled.Divider />

        <Styled.ContainerTitle>
          <Styled.Title>Participações no Youtube</Styled.Title>
        </Styled.ContainerTitle>

        <Styled.ContainerTalks>
          {participations.map((participation) => (
            <SquareVideo
              key={participation.id}
              description={participation.description}
              title={participation.title}
              url={participation.url}
              imageURI={participation.imageURI}
            />
          ))}
        </Styled.ContainerTalks>
      </Styled.Container>
    </Layout>
  );
};

export default Talks;
