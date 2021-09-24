import { SidebarTitle, SidebarWrapper } from "./Sidebar.styled";
import { GiBubbles } from "react-icons/gi";
import { SiFastly } from "react-icons/si";
import { SidebarItem } from "../SidebarItem";
import { CgMergeVertical, CgInsertAfter } from "react-icons/cg";
import { VscListSelection } from "react-icons/vsc";
import {
  BUBBLE,
  INSERTION,
  MERGE,
  QUICK,
  SELECTION,
} from "../../utils/constants/algorithmNames.constants";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarTitle>sort.</SidebarTitle>
      <SidebarItem title={BUBBLE} icon={<GiBubbles />} />
      <SidebarItem title={SELECTION} icon={<VscListSelection />} />
      <SidebarItem title={INSERTION} icon={<CgInsertAfter />} />
      <SidebarItem title={QUICK} icon={<SiFastly />} />
      <SidebarItem title={MERGE} icon={<CgMergeVertical />} />
    </SidebarWrapper>
  );
};

export default Sidebar;
