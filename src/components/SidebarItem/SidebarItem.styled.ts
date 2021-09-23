import styled from "styled-components";
import { accentGrey, darkBlue } from "../../globalStyles";

interface SidebarItemWrapperProps {
  active: boolean;
}

export const SidebarItemWrapper = styled.div<SidebarItemWrapperProps>`
  background-color: ${(props) => (props.active ? darkBlue : "white")};
  color: ${(props) => (props.active ? "white" : darkBlue)};
  border: 2px solid white;
  margin-top: 20px;
  padding: 5px;
  font-size: 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -1px;
  left: 50px;
  padding: 10px;
  background-color: ${accentGrey};
  white-space: nowrap;
  font-size: 16px;
  border-radius: 5px;
  color: white;
  animation: fade 0.3s ease;
  font-weight: 500;

  &:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 1px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent ${accentGrey} transparent transparent;
    left: -13px;
    top: 35%;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
