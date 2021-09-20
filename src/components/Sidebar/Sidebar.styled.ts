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
  margin-bottom: 20px;
`;
