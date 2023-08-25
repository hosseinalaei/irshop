"use client";

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import data from "./menu.json";
import SubMenu from "./SubMenu";

const Menu = () => {
  const menu = data?.menu;
  const [subMenu, setSubMenu] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(null);

  const getSubMenu = (item) => {
    item?.subMenu && setShowSubMenu(true);
    setSubMenu(item);
  };
  const hideSubMenu = () => {
    setShowSubMenu(false);
  };

  const [activeSubMenu, setActiveSubMenu] = useState(null);

  return (
    <div className="flex mb-8">
      {menu?.map((item) => (
        <div
          key={item?.id}
          className="relative"
          onMouseEnter={() => setActiveSubMenu(item?.id)}
          onMouseLeave={() => setActiveSubMenu(null)}
        >
          <MenuItem item={item} />
          {activeSubMenu === item?.id && (
            <div
              className="absolute left-0 z-20 mx-10 overflow-hidden bg-white rounded-2xl top-10 overflow-lg-visible"
              onMouseEnter={(e) => setShowSubMenu(true)}
              onMouseLeave={hideSubMenu}
            >
              <SubMenu subMenus={item?.subMenu} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
