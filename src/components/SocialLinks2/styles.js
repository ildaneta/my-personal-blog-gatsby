import styled from "styled-components";

const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
`;

const Circle = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  background-color: var(--colorNeutral3);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export default {
  ContainerIcons,
  Circle,
};
