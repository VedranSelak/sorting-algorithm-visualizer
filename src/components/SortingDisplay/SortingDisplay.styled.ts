import styled from "styled-components";
import { primaryColor } from "../../globalStyles";

export const SortingDisplayWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const SortingItem = styled.div`
  background-color: ${primaryColor};
  width: 100%;
  margin-right: 3px;
`;
