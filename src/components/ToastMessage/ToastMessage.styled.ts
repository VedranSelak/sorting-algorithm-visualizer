import styled from "styled-components";

export const ToastMessageText = styled.h2`
  font-size: 20px;
  margin-left: 20px;
`;

export const ToastHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DeleteToast = styled.button`
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

export const ToastContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 25px;
  margin-bottom: 10px;
`;
