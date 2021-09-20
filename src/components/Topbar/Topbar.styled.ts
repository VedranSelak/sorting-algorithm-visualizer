import styled from "styled-components";
import { primaryColor } from "../../globalStyles";

export const TopbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const TopbarLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 32px;
  position: relative;
`;

export const RangeInput = styled.input`
  width: 200px;
  -webkit-appearance: none;
  background-color: whitesmoke;
  height: 2px;
  border: none;
  outline: none;
  margin-left: -6px;
  margin-right: -6px;
  margin-top: 20px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 20px;
    background-color: ${primaryColor};
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const RangeTooltip = styled.div`
  position: absolute;
  width: 40px;
  height: 20px;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: lightgrey;
  padding: 5px;
  top: 5px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${primaryColor};

  &:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 1px;
    border-width: 6px;
    border-style: solid;
    border-color: lightgrey transparent transparent transparent;
    left: 35%;
    bottom: -10px;
  }
`;
