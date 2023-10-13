import React from 'react';
import { Outlet } from 'react-router-dom';



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