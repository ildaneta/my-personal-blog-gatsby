import React from "react";

import Styled from "./styles";

const SquareVideo = ({ title, description, imageURI, url }) => {
  return (
    <Styled.Container href={url} target="_blank">
      <Styled.Image src={imageURI} />

      <Styled.ContainerTitleDescription>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.ContainerTitleDescription>
    </Styled.Container>
  );
};

export default SquareVideo;
