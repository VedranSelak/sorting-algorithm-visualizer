import styled from "styled-components";
import {
  primaryColor,
  accentGrey,
  darkBlue,
  accentRed,
} from "../../globalStyles";

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

export const TopbarMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopbarRight = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
  width: 300px;
`;

export const RangeDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export const DescriptionItem = styled.div`
  color: ${accentGrey};
  font-size: 12px;

  &:first-child {
    margin-left: -15px;
  }

  &:last-child {
    margin-right: -15px;
  }
`;

export const SortButton = styled.button`
  width: 60px;
  height: 36px;
  background-color: ${darkBlue};
  color: white;
  border-radius: 5px;
  margin-left: 20px;
  font-weight: 400;
  font-size: 15px;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
    font-weight: 600;
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const Accent = styled.span`
  color: ${darkBlue};
  font-weight: 600;
  font-size: 17px;
`;

export const AlgorithmName = styled.div`
  color: grey;
  font-weight: 500;
  font-size: 15px;
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

interface RangeTooltipProps {
  isSorting: boolean;
}

export const RangeTooltip = styled.div<RangeTooltipProps>`
  position: absolute;
  height: 20px;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: ${(props) => (props.isSorting ? accentRed : "lightgrey")};
  padding: 5px 10px;
  top: 5px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isSorting ? "white" : primaryColor)};
  white-space: nowrap;
  ${(props) =>
    !props.isSorting &&
    `&:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 1px;
    border-width: 6px;
    border-style: solid;
    border-color: lightgrey transparent transparent transparent;
    left: 35%;
    bottom: -10px;
  }`}
`;
