import { SidebarTitle, SidebarWrapper } from "./Sidebar.styled";
import { GiBubbles } from "react-icons/gi";
import { SiFastly } from "react-icons/si";
import { SidebarItem } from "../SidebarItem";
import { CgMergeVertical } from "react-icons/cg";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarTitle>sort.</SidebarTitle>
      <SidebarItem icon={<GiBubbles />} />
      <SidebarItem icon={<SiFastly />} />
      <SidebarItem icon={<CgMergeVertical />} />
    </SidebarWrapper>
  );
};

export default Sidebar;
