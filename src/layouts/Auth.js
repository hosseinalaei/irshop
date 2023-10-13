import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import routes from '../routes'


const Auth = () => {
    console.log('auth');
      return (
        <>
          <div className="wrapper wrapper-full-page">
            <Outlet />
          </div>
        </>
      );
}
 
export default Auth;