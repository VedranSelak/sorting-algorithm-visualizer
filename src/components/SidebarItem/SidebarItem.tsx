import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAlgorithm,
  selectCurrentAlgorithm,
} from "../../store/sorting.slice";
import { SidebarItemWrapper, Tooltip } from "./SidebarItem.styled";

interface Props {
  title: string;
  icon: JSX.Element;
}

const SidebarItem = ({ title, icon }: Props) => {
  const dispatch = useDispatch();
  const selectedAlgorithm = useSelector(selectCurrentAlgorithm);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SidebarItemWrapper
      onClick={() => dispatch(selectAlgorithm({ selectedAlgorithm: title }))}
      active={selectedAlgorithm === title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      {isHovered && <Tooltip>{title}</Tooltip>}
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
