import styled from "styled-components";
import { lightBlue } from "../../globalStyles";

export const SortingDisplayWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const SortingItem = styled.div`
  background-color: ${lightBlue};
  margin-right: 3px;
  width: 100%;
`;
