import { SidebarTitle, SidebarWrapper } from "./Sidebar.styled";
import { GiBubbles } from "react-icons/gi";
import { SiFastly } from "react-icons/si";
import { SidebarItem } from "../SidebarItem";
import { CgMergeVertical } from "react-icons/cg";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarTitle>sort.</SidebarTitle>
      <SidebarItem title="Bubble Sort" icon={<GiBubbles />} />
      <SidebarItem title="Quick Sort" icon={<SiFastly />} />
      <SidebarItem title="Merge Sort" icon={<CgMergeVertical />} />
    </SidebarWrapper>
  );
};

export default Sidebar;
