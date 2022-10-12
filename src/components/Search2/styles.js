import styled from "styled-components";
import { Link } from "gatsby";

const Button = styled(Link)`
  border-style: none;

  &:hover svg {
    fill: #f77394;
  }
`;

const Input = styled.input`
  border-style: none;
  border-bottom: 2px solid var(--colorBorder);
  width: 240px;
  background-color: var(--sidebarBackground);
  color: var(--colorLetters);
  font-size: 0.875rem;
  font-family: "Montserrat";
  font-weight: 500;

  &::placeholder {
    color: var(--placeholderSearch);
    font-size: 0.875rem;
    font-family: "Montserrat";
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #f77394;
  }
`;

// const Container = styled.div`
//   display: flex;

//   .ais-SearchBox-input {
//     border-style: none;
//     border-bottom: 2px solid #111;
//     width: 200px;
//     background-color: var(--sidebarBackground);
//     color: var(--colorLetters);
//     font-size: 0.875rem;
//     font-family: "Montserrat";
//     font-weight: 500;

//     &::placeholder {
//       color: var(--placeholderSearch);
//       font-size: 0.875rem;
//       font-family: "Montserrat";
//       font-weight: 400;
//     }

//     &:focus {
//       width: 400px;
//       outline: none;
//       border-bottom: 2px solid var(--searchColor);
//     }
//   }

//   .ais-SearchBox-submit {
//     border: none;
//     cursor: pointer;

//     svg {
//       height: 20px;
//       width: 20px;
//       fill: var(--neutralColor3);

//       &:hover {
//         fill: var(--searchColor);
//       }
//     }
//   }
// `;

export default {
  Input,
  Button,
};
