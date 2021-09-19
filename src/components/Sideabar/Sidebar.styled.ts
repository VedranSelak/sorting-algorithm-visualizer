import styled from "styled-components";
import { primaryColor } from "../../globalStyles";

export const SidebarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 70px;
  height: 100vh;
  padding: 15px 0;
  background-color: ${primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarTitle = styled.h3`
  font-size: 20px;
  color: white;
`;

export const InputArraySize = styled.input`
  width: 80%;
  background: transparent;
  text-align: center;
  color: white;
  outline: none;
  border: 2px solid white;
  border-radius: 2px;
  margin-top: 20px;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
