import React from "react";

import { Github } from "@styled-icons/bootstrap/Github";
import { Email } from "@styled-icons/material-rounded/Email";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";

import Styled from "./styles";

const SocialLinks2 = () => {
  return (
    <Styled.ContainerIcons>
      <a href="https://github.com/ildaneta" target="_blank" title="Github">
        <Github size={25} color="#333" />
      </a>
      <a href="mailto:iildaneta@gmail.com" target="_blank" title="E-mail">
        <Styled.Circle>
          <Email size={18} color="#fff" />
        </Styled.Circle>
      </a>
      <a
        href="https://www.linkedin.com/in/ildaneta/"
        target="_blank"
        title="LinkedIn"
      >
        <Styled.Circle>
          <Linkedin size={18} color="#fff" />
        </Styled.Circle>
      </a>
    </Styled.ContainerIcons>
  );
};

export default SocialLinks2;
