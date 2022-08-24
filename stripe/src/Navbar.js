import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { openSidebar, closeSidebar, openSubmenu, closeSubmenu } =
    useGlobalContext();
  const displaysubmenu = (e) => {
    ///to get page info
    const page = e.target.textContent;
    //to get location info
    const tempBtn = e.target.getBoundingClientRect();
    // to make center
    const center = (tempBtn.left + tempBtn.right) / 2;
    //to make it bottom
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <div className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='stripe' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaysubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaysubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaysubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
