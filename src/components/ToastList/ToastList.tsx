import { ToastListContainer } from "../containers";
import { ErrorMessage } from "../ErrorMessage";

interface Props {
  list: string[];
}
const ToastList = ({ list }: Props) => {
  return (
    <ToastListContainer>
      {list.map((toast, index) => {
        return <ErrorMessage key={index} message={toast} />;
      })}
    </ToastListContainer>
  );
};

export default ToastList;
