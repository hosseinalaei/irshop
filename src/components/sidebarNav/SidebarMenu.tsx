import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import data from "./menu.json";
import { usePathname, useRouter } from "next/navigation";
// import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const menu = data?.menu;
  const pathname = usePathname();
  const router = useRouter();

  const [expandedSubMenu, setExpandedSubMenu] = React.useState(null);
  const [showSubMenu, setShowSubMenu] = React.useState(false);

  return (
    <div
      id="app_sidebar"
      className="flex flex-col h-full overflow-y-scroll bg-white rounded-2xl"
    >
      <div
        className="sticky top-0 px-4 py-3 bg-white d-flex flex-stack px-lg-6 py-lg-8"
        id="kt_app_sidebar_logo"
      >
        <Logo />

        <UserMenu />
      </div>

      <div className="px-10 text-xl">
        <ul className="">
          {menu?.map((item) => (
            <li
              key={item?.id}
              className="mb-5 cursor-pointer "
              onClick={() =>
                item?.subMenu
                  ? setExpandedSubMenu(item?.id)
                  : router.push(item?.url)
              }
            >
              <span className="hover:text-blue-500">
                {/* {item?.subMenu && "^"} */}
                {item?.name}
              </span>
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
          ))}
        </ul>
      </div>

      {/* <div className="px-4 aside-menu flex-column-fluid">
        <div
          className="my-5 hover-scroll-overlay-y pe-4 me-n4"
          id="kt_aside_menu_wrapper"
        >
          <div
            className="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6"
            id="#kt_aside_menu"
            data-kt-menu="true"
          >
            <div className="menu-item">
              <a className="menu-link" href="{{ route('admin.dashboard') }}">
                <span className="menu-icon">
                  <i className="ki-duotone ki-element-11 fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </i>
                </span>
                <span className="menu-title">داشبورد</span>
              </a>
            </div>

            <div className="menu-item here menu-accordion">
              <span className="menu-link">
                <span className="menu-icon">
                  <i className="ki-duotone ki-element-7 fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </span>
                <span className="menu-title">محصولات</span>
                <span className="menu-arrow"></span>
              </span>

              <div className="menu-sub menu-sub-accordion">
                <div className="menu-item">
                  <a className="menu-link" href="./products.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot"></span>
                    </span>
                    <span className="menu-title">بهداشتی</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              data-kt-menu-trigger="click"
              className="menu-item here menu-accordion"
            >
              <span className="menu-link">
                <span className="menu-icon">
                  <i className="ki-duotone ki-element-7 fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </span>
                <span className="menu-title">تنظیمات</span>
                <span className="menu-arrow"></span>
              </span>

              <div className="menu-sub menu-sub-accordion @if (Request::is('admin/configs/*')) show @endif">
                <div className="menu-item">
                  <a
                    className="menu-link {{ Request::routeIs('admin.configs.view') ? 'active' : '' }}"
                    href="{{ route('admin.configs.view') }}"
                  >
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot"></span>
                    </span>
                    <span className="menu-title">تنظیمات اصلی</span>
                  </a>

                  <a
                    className="menu-link {{ Request::routeIs('admin.configs.permissions.list') ? 'active' : '' }}"
                    href="{{ route('admin.configs.permissions.list') }}"
                  >
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot"></span>
                    </span>
                    <span className="menu-title">0</span>
                  </a>
                </div>

                <div className="menu-item">
                  <a
                    className="menu-link {{ Request::routeIs('admin.configs.roles.list') ? 'active' : '' }}"
                    href="{{ route('admin.configs.roles.list') }}"
                  >
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot"></span>
                    </span>
                    <span className="menu-title">1</span>
                  </a>
                </div>

                <div className="menu-item">
                  <a
                    className="menu-link {{ Request::routeIs('admin.configs.users.list') ? 'active' : '' }}"
                    href="{{ route('admin.configs.users.list') }}"
                  >
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot"></span>
                    </span>
                    <span className="menu-title">2</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SidebarMenu;
