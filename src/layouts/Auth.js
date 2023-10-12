import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import routes from '../routes'


const Auth = () => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
          if (prop.collapse) {
            return getRoutes(prop.views);
          }
          if (prop.layout === '/auth') {
            return <Route path={prop.layout + prop.path} key={key} component={prop.component} />;
          } else {
            return null;
          }
        });
      };
      return (
        <>
          <div className="wrapper wrapper-full-page">
            <Outlet />
          </div>
        </>
      );
}
 
export default Auth;