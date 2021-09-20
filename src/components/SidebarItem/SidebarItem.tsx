import { useDispatch, useSelector } from "react-redux";
import {
  selectAlgorithm,
  selectCurrentAlgorithm,
} from "../../store/sorting.slice";
import { SidebarItemWrapper } from "./SidebarItem.styled";

interface Props {
  title: string;
  icon: JSX.Element;
}

const SidebarItem = ({ title, icon }: Props) => {
  const dispatch = useDispatch();
  const selectedAlgorithm = useSelector(selectCurrentAlgorithm);

  return (
    <SidebarItemWrapper
      onClick={() => dispatch(selectAlgorithm({ selectedAlgorithm: title }))}
      active={selectedAlgorithm === title}
    >
      {icon}
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
