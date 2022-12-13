import { sideBarMenuItems } from "../sideBarMenuItems";
import SideBarMenuItems from "./SideBarMenuItems";

const SideBar = ({ items, depthLevel }) => {
  return (
    <nav>
      <ul className="sidebar flex-col">
        {sideBarMenuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <SideBarMenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
