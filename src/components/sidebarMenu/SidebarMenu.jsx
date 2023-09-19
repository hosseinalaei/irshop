import React, { useState } from "react";
import data from "./menu.json";
import Logo from "./Logo";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarMenu = () => {
  const menu = data?.menu;
  const location = useLocation();
  const nav = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [openSubMenus, setOpenSubMenus] = useState([]);

  const toggleSubMenu = (itemId) => {
    if (openSubMenus.includes(itemId)) {
      setOpenSubMenus(openSubMenus.filter((id) => id !== itemId));
    } else {
      setOpenSubMenus([...openSubMenus, itemId]);
    }
  };

  const isSubMenuOpen = (itemId) => openSubMenus.includes(itemId);

  return (
    <>
      <div
        className={`flex-col h-full overflow-y-scroll bg-white rounded-2xl hidden md:flex`}
      >
        <div className="sticky top-0 px-4 py-3 bg-white d-flex flex-stack px-lg-6 py-lg-8">
          <Logo />

          {/* <UserMenu /> */}
        </div>

        <div className="h-full text-xl">
          <ul className="relative flex-col h-full p-0">
            {menu?.map((item) => (
              <div key={item?.id}>
                <NavLink
                  key={item?.id}
                  to={item?.subMenu ? item?.url : item?.url}
                  onClick={() => item?.subMenu && toggleSubMenu(item?.id)}
                  className={`flex items-center justify-between w-full px-10 py-2 rounded-lg cursor-pointer text-slate-500 hover:bg-gray-100 ${
                    location?.pathname === item?.url && "bg-gray-200"
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
                      <NavLink key={index} to={subMenu?.url}>
                        <div
                          className={`text-slate-500 py-2  w-full px-16 whitespace-nowrap cursor-pointer rounded-lg hover:bg-gray-100 ${
                            location?.pathname === subMenu?.url && "bg-gray-200"
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
            <div className="absolute flex justify-center w-full bottom-4">
              <button
                className="w-5/6 py-2 text-white bg-blue-500 rounded-md"
                onClick={() => {
                  localStorage.removeItem("user-token");
                  nav("/auth/login");
                }}
              >
                خروج
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
