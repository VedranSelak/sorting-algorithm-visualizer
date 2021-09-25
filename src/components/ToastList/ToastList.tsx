import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteToast } from "../../store/ui.slice";
import { ToastListContainer } from "../containers";
import { ToastMessage } from "../ToastMessage";

interface Props {
  list: { type: string; message: string }[];
}
const ToastList = ({ list }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(deleteToast({ toastIndex: 0 }));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, list]);

  return (
    <ToastListContainer>
      {list.map((toast, index) => {
        return <ToastMessage key={index} index={index} {...toast} />;
      })}
    </ToastListContainer>
  );
};

export default ToastList;
