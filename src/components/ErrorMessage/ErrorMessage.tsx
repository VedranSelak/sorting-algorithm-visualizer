import { ErrorMessageContainer } from "../containers";
import { BiErrorAlt } from "react-icons/bi";
import {
  DeleteError,
  ErrorContents,
  ErrorHeader,
  ErrorMessageText,
} from "./ErrorMessage.styled";
import { useDispatch } from "react-redux";
import { deleteError } from "../../store/ui.slice";

interface Props {
  message: string;
}
const ErrorMessage = ({ message }: Props) => {
  const dispatch = useDispatch();
  const handleDeleteError = () => {
    dispatch(deleteError());
  };

  return (
    <ErrorMessageContainer>
      <ErrorHeader>
        <DeleteError onClick={handleDeleteError}>X</DeleteError>
      </ErrorHeader>
      <ErrorContents>
        <BiErrorAlt />
        <ErrorMessageText>{message}</ErrorMessageText>
      </ErrorContents>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
