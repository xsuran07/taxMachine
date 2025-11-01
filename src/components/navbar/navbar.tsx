import Image from "next/image";
import Logo from "./logo";
import { NavbarProps } from "./types";
import MenuItem from "./menuItem";

export default function Navbar(props: NavbarProps) {
  return (
    <nav className="drawer p-0">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-0">
        <div className="navbar bg-base-300 h-full w-full p-0">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="menu-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
            </label>
          </div>
          <div className="lg:navbar-start ml-2 h-full flex-1">
            <Logo {...props.logo} />
          </div>
          <div className="navbar-center hidden h-full lg:block">
            <ul className="menu menu-horizontal h-full p-0">
              {props.navLinks.map((navLinkItem, index) => (
                <MenuItem key={index} navLinkItem={navLinkItem} />
              ))}
            </ul>
          </div>
          <div className="navbar-end hidden h-full flex-1 lg:block"></div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="menu-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {props.navLinks.map((navLinkItem, index) => (
            <MenuItem key={index} navLinkItem={navLinkItem} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
