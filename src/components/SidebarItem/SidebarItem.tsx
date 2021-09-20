import { SidebarItemWrapper } from "./SidebarItem.styled";

interface Props {
  icon: JSX.Element;
}

const SidebarItem = ({ icon }: Props) => {
  return <SidebarItemWrapper>{icon}</SidebarItemWrapper>;
};

export default SidebarItem;
