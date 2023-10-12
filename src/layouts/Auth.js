import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
            <Routes>{getRoutes(routes)}</Routes>
          </div>
        </>
      );
}
 
export default Auth;