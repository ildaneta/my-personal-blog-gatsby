import React from "react";
import Styled from "./styles";

const Button = ({ hasIcon, label, url, hasBlank, children }) => {
  return (
    <Styled.Container title={label}>
      {hasIcon ? (
        <>
          {children}
          <Styled.Label to={url} target={hasBlank && "__blank"}>
            {label}
          </Styled.Label>
        </>
      ) : (
        <Styled.Label to={url} target={hasBlank && "__blank"}>
          {label}
        </Styled.Label>
      )}
    </Styled.Container>
  );
};

export default Button;
