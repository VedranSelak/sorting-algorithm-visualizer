import { useState } from "react";
import { InputArraySize, SidebarTitle, SidebarWrapper } from "./Sidebar.styled";
import { GiBubbles } from "react-icons/gi";
import { SiFastly } from "react-icons/si";
import { SidebarItem } from "../SidebarItem";
import { CgMergeVertical } from "react-icons/cg";

const Sidebar = () => {
  const [arraySize, setArraySize] = useState("200");
  return (
    <SidebarWrapper>
      <SidebarTitle>sort.</SidebarTitle>
      <InputArraySize
        value={arraySize}
        onChange={(e) => setArraySize(e.target.value)}
        type="number"
      />
      <SidebarItem icon={<GiBubbles />} />
      <SidebarItem icon={<SiFastly />} />
      <SidebarItem icon={<CgMergeVertical />} />
    </SidebarWrapper>
  );
};

export default Sidebar;
