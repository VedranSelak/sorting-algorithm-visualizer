import { ToastMessageContainer } from "../containers";
import { BiErrorAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteToast } from "../../store/ui.slice";
import { AiOutlineWarning } from "react-icons/ai";
import {
  DeleteToast,
  ToastContents,
  ToastHeader,
  ToastMessageText,
} from "./ToastMessage.styled";

interface Props {
  type: string;
  message: string;
  index: number;
}

const ToastMessage = ({ type, message, index }: Props) => {
  const dispatch = useDispatch();
  const handleDeleteToast = () => {
    dispatch(deleteToast({ toastIndex: index }));
  };

  return (
    <ToastMessageContainer isWarning={type === "warning"}>
      <ToastHeader>
        <DeleteToast onClick={handleDeleteToast}>X</DeleteToast>
      </ToastHeader>
      <ToastContents>
        {type === "warning" ? <AiOutlineWarning /> : <BiErrorAlt />}
        <ToastMessageText>{message}</ToastMessageText>
      </ToastContents>
    </ToastMessageContainer>
  );
};

export default ToastMessage;
