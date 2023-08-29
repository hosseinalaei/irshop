import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import data from "./menu.json";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const menu = data?.menu;
  const pathname = usePathname();
  const router = useRouter();

  const [expandedSubMenu, setExpandedSubMenu] = React.useState(null);
  const [showSubMenu, setShowSubMenu] = React.useState(false);

  return (
    <>
      <div className="flex-col h-full overflow-y-scroll bg-white md:flex rounded-2xl ">
        <div
          className="sticky top-0 px-4 py-3 bg-white d-flex flex-stack px-lg-6 py-lg-8"
          id="kt_app_sidebar_logo"
        >
          <Logo />

          {/* <UserMenu /> */}
        </div>

        <div className="text-xl">
          <ul className="">
            {menu?.map((item) => (
              <div
                key={item?.id}
                className={`flex ${item?.subMenu ? "px-5" : "px-10"}`}
              >
                {item?.subMenu && (
                  <FontAwesomeIcon
                    width={"20px"}
                    icon={faChevronDown}

                    // rotation={180}
                  />
                )}
                <li
                  key={item?.id}
                  className="mb-5 cursor-pointer "
                  onClick={() =>
                    item?.subMenu
                      ? setExpandedSubMenu(item?.id)
                      : router.push(item?.url)
                  }
                >
                  <span className="hover:text-blue-500">{item?.name}</span>
                  {item?.subMenu && (
                    <ul
                      className={`px-5 ${
                        expandedSubMenu === item?.id ? "show" : "hidden"
                      }`}
                    >
                      {item?.subMenu?.map((subMenu, index) => (
                        <li
                          key={index}
                          className={`my-2 hover:text-blue-300 ${
                            pathname === subMenu?.url
                              ? "text-blue-400 font-bold"
                              : ""
                          }`}
                          onClick={(event) => {
                            event.stopPropagation();
                            router?.push(subMenu?.url);
                          }}
                        >
                          {subMenu?.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
