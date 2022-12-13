import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

{
  /**In the code, we are passing the menu items data to the MenuItems component via the items prop. This is a process called prop drilling and is a basic React principle.
   *
   *
   * When we click the “web development” submenu, we want to logically position its dropdown to the right. We can achieve this by detecting the dropdown depth level.
   */
}
const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
