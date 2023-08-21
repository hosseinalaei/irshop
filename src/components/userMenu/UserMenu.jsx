import React from "react";

const UserMenu = ({ setShowUserMenu }) => {
  return (
    <>
      <div
        className="absolute top-0 right-0 z-50 py-4 bg-white shadow-2xl menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold fs-6 w-275px"
        onMouseEnter={() => setShowUserMenu(true)}
        onMouseLeave={() => setShowUserMenu(false)}
      >
        {/* <!--begin::Menu item--> */}
        <div className="px-3 menu-item">
          <div className="px-3 menu-content d-flex align-items-center">
            {/* <!--begin::Avatar--> */}
            <div className="symbol symbol-50px me-5">
              <img alt="Logo" src="300-2.jpg" />
            </div>
            {/* <!--end::Avatar--> */}
            {/* <!--begin::Username--> */}
            <div className="d-flex flex-column">
              <div className="fw-bold d-flex align-items-center fs-5">
                Max Smith
                <span className="px-2 py-1 badge badge-light-success fw-bold fs-8 ms-2">
                  Pro
                </span>
              </div>
              <a
                href="#"
                className="fw-semibold text-muted text-hover-primary fs-7"
              >
                max@kt.com
              </a>
            </div>
            {/* <!--end::Username--> */}
          </div>
        </div>
        {/* <!--end::Menu item--> */}
        {/* <!--begin::Menu separator--> */}
        <div className="my-2 separator"></div>
        {/* <!--end::Menu separator--> */}
        {/* <!--begin::Menu item--> */}
        <div className="px-5 menu-item">
          <a
            href="../../demo23/dist/account/overview.html"
            className="px-5 menu-link"
          >
            My Profile
          </a>
        </div>
        {/* <!--end::Menu item--> */}
        {/* <!--begin::Menu item--> */}
        <div className="px-5 menu-item">
          <a
            href="../../demo23/dist/apps/projects/list.html"
            className="px-5 menu-link"
          >
            <span className="menu-text">My Projects</span>
            <span className="menu-badge">
              <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                3
              </span>
            </span>
          </a>
        </div>
        {/* <!--end::Menu item--> */}
      </div>
    </>
  );
};

export default UserMenu;
