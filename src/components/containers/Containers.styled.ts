import { yellowWarning } from "./../../globalStyles";
import styled, { keyframes } from "styled-components";
import { accentRed } from "../../globalStyles";

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ToastListContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
  height: 500px;
  overflow: hidden;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
`;

interface ToastMessageContainerProps {
  isWarning: boolean;
}

export const ToastMessageContainer = styled.div<ToastMessageContainerProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-end;
  background-color: ${(props) => (props.isWarning ? yellowWarning : accentRed)};
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 10px;
  animation: ${FadeIn} 300ms linear;
`;
