import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteError } from "../../store/ui.slice";
import { ToastListContainer } from "../containers";
import { ErrorMessage } from "../ErrorMessage";

interface Props {
  list: string[];
}
const ToastList = ({ list }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(deleteError({ errorIndex: 0 }));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, list]);

  return (
    <ToastListContainer>
      {list.map((toast, index) => {
        return <ErrorMessage key={index} index={index} message={toast} />;
      })}
    </ToastListContainer>
  );
};

export default ToastList;
