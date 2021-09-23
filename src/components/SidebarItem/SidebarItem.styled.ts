import styled from "styled-components";
import { darkBlue } from "../../globalStyles";

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

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
