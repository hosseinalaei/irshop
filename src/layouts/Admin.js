import React from "react";
import { Outlet } from "react-router-dom";

import MobileSidebarMenu from "../components/sidebarMenu/MobileSidebarMenu";
import SidebarMenu from "../components/sidebarMenu/SidebarMenu";

const Admin = ({ routes }) => {
  return (
    <div className="flex w-full h-screen bg-blue-200">
      <div className="lg:hidden">
        <MobileSidebarMenu menu={routes} />
      </div>
      <div className="w-[20vw] h-screen py-10 mr-10 hidden lg:block">
        <SidebarMenu menu={routes} />
      </div>

      <div className="w-full lg:w-[80vw] h-screen px-5 py-10 overflow-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
