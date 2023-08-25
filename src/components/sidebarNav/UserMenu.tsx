import React, { useState } from "react";
import UserMenu from "../userMenu/UserMenu";

const UserMenuButton = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  return (
    <div className="relative ms-3">
      <button
        className="relative cursor-pointer symbol symbol-circle symbol-40px"
        onMouseEnter={() => setShowUserMenu(true)}
        onMouseLeave={() => setShowUserMenu(false)}
        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <img src="/300-2.jpg" alt="user" />
        <div className="absolute rounded-circle bg-success start-100 top-100 h-8px w-8px ms-n3 mt-n3"></div>
      </button>

      {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
    </div>
  );
};

export default UserMenuButton;
