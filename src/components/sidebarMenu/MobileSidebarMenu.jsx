import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileSidebarMenu = ({menu}) => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const [openSubMenus, setOpenSubMenus] = useState([]);

  const toggleSubMenu = (e,itemId) => {
    e.preventDefault();
    if (openSubMenus.includes(itemId)) {
      setOpenSubMenus(openSubMenus.filter((id) => id !== itemId));
    } else {
      setOpenSubMenus([...openSubMenus, itemId]);
    }
  };

  const isSubMenuOpen = (itemId) => openSubMenus.includes(itemId);

  // {
  //   "id": 8,
  //   "name": "سفارش‌ها",
  //   "url": "/orders",
  //   "icon": "images"
  // },
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-40 w-screen h-screen bg-black opacity-50"
          onClick={() => setIsOpen(false)} // Close the menu when overlay is clicked
        ></div>
      )}
      <div className="sticky top-0 z-50 w-full py-3 pr-5 lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon="bars" className="text-4xl text-blue-500" />
        </button>
      </div>
      {isOpen && (
        <div
          className={`absolute top-0 w-screen h-screen transition-all bg-white`}
        >
          <div
            className={`absolute top-0  flex-col h-screen z-50 overflow-auto bg-white rounded-l-2xl`}
          >
            <div className="sticky top-0 px-4 py-3 bg-white d-flex flex-stack px-lg-6 py-lg-8">
              <Logo />
              <FontAwesomeIcon
                icon="times"
                className="text-3xl text-blue-500 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />

              {/* <UserMenu /> */}
            </div>

            <div className="text-xl">
              <ul className="p-0">
                {menu?.map((item) => (
                  <div key={item?.id}>
                    <NavLink
                      key={item?.id}
                      to={item?.subMenu ? item.layout+item.path : item.layout+item.path}
                      onClick={(e) => item?.subMenu && toggleSubMenu(e,item?.id)}
                      className={`flex items-center justify-between w-full px-10 py-2 rounded-lg cursor-pointer text-slate-500 hover:bg-gray-100 ${
                        location?.pathname === item.layout + item.path && "bg-gray-200"
                      }`}
                    >
                      <div className="flex">
                        <FontAwesomeIcon
                          icon={item?.icon}
                          className="px-2 text-xl text-slate-500"
                        />

                        {item?.name}
                      </div>

                      {item?.subMenu && (
                        <FontAwesomeIcon
                          width={"20px"}
                          icon="chevron-down"
                          className={`text-base text-slate-500 ${
                            isSubMenuOpen(item.id) ? "rotate-180" : ""
                          } transition-all ease-in-out duration-300`}
                        />
                      )}
                    </NavLink>
                    {item?.subMenu && (
                      <ul
                        className={`${
                          isSubMenuOpen(item.id)
                            ? "visible max-h-40"
                            : "max-h-0 invisible"
                        } transition-all ease-linear duration-300`}
                      >
                        {item?.subMenu?.map((subMenu, index) => (
                          <NavLink key={index} to={subMenu.layout+subMenu.path}>
                            <div
                              className={`text-slate-500 py-2  w-full px-16 whitespace-nowrap cursor-pointer rounded-lg hover:bg-gray-100 ${
                                location?.pathname === subMenu.layout+subMenu.path &&
                                "bg-gray-200"
                              }`}
                            >
                              <FontAwesomeIcon
                                icon={subMenu?.icon}
                                className="px-2 text-lg text-slate-500"
                              />

                              {subMenu?.name}
                            </div>
                          </NavLink>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSidebarMenu;
