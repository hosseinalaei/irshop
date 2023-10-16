import React from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const history = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState('');
  const [userInfo, setUserInfo] = React.useState(null);
  const [responseMsg, setResponseMsg] = React.useState('');
  // define login method
  // const loginUser = async (e) => {
  //   e.preventDefault();
  //   if (e.target.email.value === '' || e.target.password.value === '')
  //     setResponseMsg('You must fill the requierd field');
  //   else {
  //     setLoading(true);
  //     axios({
  //       baseURL:
  //         process.env.NODE_ENV === 'development'
  //           ? process.env.REACT_APP_DEV_MODE
  //           : process.env.REACT_APP_PRO_MODE,
  //       url: '/api/login',
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         Accept: 'application/json',
  //       },
  //       data: {
  //         email: e.target.email.value,
  //         password: e.target.password.value,
  //         temp_password: e.target.temp_password.value,
  //       },
  //     })
  //       .then((res) => {
  //         const { data } = res;
  //         localStorage.setItem('access-token', data.payload.token);
  //         localStorage.setItem('user-info', JSON.stringify(data.payload.user));
  //         setAccessToken(data.payload.token);
  //         setUserInfo(data.payload.user);
  //         history.push('/admin/dashboard');
  //       })
  //       .catch((error) => {
  //         setLoading(false);
 
  //         setResponseMsg(error.response.data.message);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }
  // };
  // define register method
  // const registerUser = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   axios({
  //     baseURL:
  //       process.env.NODE_ENV === 'development'
  //         ? process.env.REACT_APP_DEV_MODE
  //         : process.env.REACT_APP_PRO_MODE,
  //     url: '/api/register',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       Accept: 'application/json',
  //     },
  //     data: {
  //       first_name: e.target.first_name.value,
  //       last_name: e.target.last_name.value,
  //       email: e.target.email.value,
  //       password: e.target.password.value,
  //       password_confirmation: e.target.password_confirmation.value,
  //     },
  //   })
  //     .then((res) => {
  //       const { data } = res;
  //       localStorage.setItem('access-token', JSON.stringify(data.payload.token));
  //       localStorage.setItem('user-info', JSON.stringify(data.payload.user));
  //       setAccessToken(data.payload.token);
  //       setUserInfo(data.payload.user);
  //       history.push('/auth/email-confirmation');
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setResponseMsg(error.response.data);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };
  //define verification method
  // const emailVerification = async(e) =>{
  //   e.preventDefault();
  //   setLoading(true);
  //   axios({
  //     baseURL:
  //       process.env.NODE_ENV === 'development'
  //         ? process.env.REACT_APP_DEV_MODE
  //         : process.env.REACT_APP_PRO_MODE,
  //     url: '/api/email/verify',
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${JSON.parse(localStorage.getItem('access-token'))}`,
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       Accept: 'application/json',
  //     },
  //     data: {
  //       code: e.target.verification.value,
  //     }
  //   }).then(() => {
  //     history.push('/');
  //   }).catch((error) =>{
  //     setLoading(false);
  //     setResponseMsg(error.response.data.message)
  //   }).finally(() =>{
  //     setLoading(false);
  //   });
  // }

  //define password reset method
  // const passwordReset = async(e) =>{
  //   e.preventDefault();
  //   setLoading(true);
  //   axios({
  //     baseURL:
  //       process.env.NODE_ENV === 'development'
  //         ? process.env.REACT_APP_DEV_MODE
  //         : process.env.REACT_APP_PRO_MODE,
  //     url: '/api/forget-change-password',
  //     method: 'POST',
  //     data: {
  //       code: e.target.code.value,
  //       email:e.target.email.value,
  //       password: e.target.password.value,
  //       password_confirmation: e.target.password_confirmation.value
  //     }
  //   }).then(() => {
  //     history.push('/');
  //   });
  // }
  
  // define logout method
  // const logoutUser = () => {
  //   axios({
  //     baseURL:
  //       process.env.NODE_ENV === 'development'
  //         ? process.env.REACT_APP_DEV_MODE
  //         : process.env.REACT_APP_PRO_MODE,
  //     url: '/api/logout',
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('access-token')}`,
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       Accept: 'application/json',
  //     },
  //   }).then(() => {
  //     setAccessToken('');
  //     setUserInfo(null);
  //     localStorage.clear();
  //     history.push('/');
  //   });
  // };
  return (
    <AuthContext.Provider
      value={{
        userInfo,
        responseMsg,
        setUserInfo,
        accessToken,
        setAccessToken,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;