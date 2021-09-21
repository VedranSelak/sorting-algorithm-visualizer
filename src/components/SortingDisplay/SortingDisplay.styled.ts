import styled from "styled-components";
import { primaryColor } from "../../globalStyles";

export const SortingDisplayWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

interface SortingItemProps {
  value: number;
}

export const SortingItem = styled.div<SortingItemProps>`
  background-color: ${primaryColor};
  height: ${(props) => `${props.value}%`};
  width: 100%;
  margin-right: 3px;
`;
