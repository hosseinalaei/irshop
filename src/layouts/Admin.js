import React from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from '../routes'
import MobileSidebarMenu from '../components/sidebarMenu/MobileSidebarMenu';
import SidebarMenu from '../components/sidebarMenu/SidebarMenu';

const Admin = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === '/admin') {
        return <Route path={prop.layout + prop.path} key={key} component={prop.component} />;
      } else {
        return null;
      }
    });
  };


  return (
    <div className="flex w-full h-screen bg-cyan-600">
      <div className="lg:hidden">
        <MobileSidebarMenu />
      </div>
      <div className="w-[20vw] h-screen py-10 mr-10 hidden lg:block">
        <SidebarMenu />
      </div>

      <div className="w-full lg:w-[80vw] h-screen px-5 py-10 overflow-auto ">
        <Routes>
        {getRoutes(routes)}
        </Routes>
      </div>
    </div>
  );
}
 
export default Admin;