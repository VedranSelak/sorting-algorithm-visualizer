import { SidebarTitle, SidebarWrapper } from "./Sidebar.styled";
import { GiBubbles } from "react-icons/gi";
import { SiFastly } from "react-icons/si";
import { SidebarItem } from "../SidebarItem";
import { CgMergeVertical } from "react-icons/cg";
import {
  BUBBLE,
  MERGE,
  QUICK,
} from "../../utils/constants/algorithmNames.constants";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarTitle>sort.</SidebarTitle>
      <SidebarItem title={BUBBLE} icon={<GiBubbles />} />
      <SidebarItem title={QUICK} icon={<SiFastly />} />
      <SidebarItem title={MERGE} icon={<CgMergeVertical />} />
    </SidebarWrapper>
  );
};

export default Sidebar;
