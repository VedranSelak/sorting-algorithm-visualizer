import styled from "styled-components";

export const ErrorMessageText = styled.h2`
  font-size: 20px;
`;

export const ErrorHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const DeleteError = styled.button`
  font-size: 10px;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: -10px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const ErrorContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 25px;
  margin-bottom: 10px;
`;
