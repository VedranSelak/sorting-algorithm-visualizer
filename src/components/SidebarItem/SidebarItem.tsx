import { useDispatch } from "react-redux";
import { selectAlgorithm } from "../../store/sorting.slice";
import { SidebarItemWrapper } from "./SidebarItem.styled";

interface Props {
  title: string;
  icon: JSX.Element;
}

const SidebarItem = ({ title, icon }: Props) => {
  const dispatch = useDispatch();

  return (
    <SidebarItemWrapper
      onClick={() => dispatch(selectAlgorithm({ selectedAlgorithm: title }))}
    >
      {icon}
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
