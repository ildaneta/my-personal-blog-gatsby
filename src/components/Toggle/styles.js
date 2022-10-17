import styled from "styled-components";
import media from "styled-media-query";

const ToggleWrapper = styled.label`
  position: relative;
  margin: 0 5px;
`;

const Toggle = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + span {
    background-color: #111;

    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: #bfbfbf;
  position: relative;
  transition: background-color 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 35, 11, 0.2);
  }

  &:active:before {
    width: 28px;
  }
`;

export default {
  ToggleWrapper,
  Toggle,
  Slider,
};
