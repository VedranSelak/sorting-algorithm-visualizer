import styled from "styled-components";
import { lightPurple } from "../../globalStyles";

interface SidebarItemWrapperProps {
  active: boolean;
}

export const SidebarItemWrapper = styled.div<SidebarItemWrapperProps>`
  color: ${(props) => (props.active ? lightPurple : "white")};
  border: 2px solid ${(props) => (props.active ? lightPurple : "white")};
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
