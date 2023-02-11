import React from "react";
import Button from "../components/Button";
import Layout2 from "../components/Layout2";
import Seo from "../components/seo";

import { Github } from "@styled-icons/bootstrap/Github";
import { Email } from "@styled-icons/material-rounded/Email";
import { LinkedinWithCircle as Linkedin } from "@styled-icons/entypo-social/LinkedinWithCircle";

const AboutMe = () => {
  return (
    <Layout2>
      <Seo title="Sobre mim" />

      <text style={{ marginBottom: 40 }}>Sobre mim</text>

      <nav style={{ display: "flex" }}>
        <Button
          label="LinkedIn"
          url="https://www.linkedin.com/in/ildaneta/"
          hasBlank
          hasIcon
        >
          <Linkedin size={20} />
        </Button>

        <div style={{ marginRight: 20 }} />

        <Button
          label="Github"
          url="https://github.com/ildaneta"
          hasBlank
          hasIcon
        >
          <Github size={18} />
        </Button>

        <div style={{ marginRight: 20 }} />

        <Button
          label="E-mail"
          url="mailto:iildaneta@gmail.com"
          hasBlank
          hasIcon
        >
          <Email size={19} />
        </Button>
      </nav>
    </Layout2>
  );
};

export default AboutMe;
