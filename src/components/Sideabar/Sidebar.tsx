import { useState } from "react";
import { InputArraySize, SidebarTitle, SidebarWrapper } from "./Sidebar.styled";

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
    </SidebarWrapper>
  );
};

export default Sidebar;
