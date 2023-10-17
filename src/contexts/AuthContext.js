import React from 'react';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState('');
  const [userInfo, setUserInfo] = React.useState(null);
  const [responseMsg, setResponseMsg] = React.useState('');
  const [validationCodeInput, setValidationCodeInput] = useState(false);
  const [validationCode, setValidationCode] = useState(null);
  const [error, setError] = useState("");

  const [loginInfo, setLoginInfo] = useState({
    mobile: "",
    verifyCode: "",
  });
  // define login method


  const getVerificationCode = (e, body) =>{
    e.preventDefault();
      setLoading(true);
      axios({
        baseURL:'https://138.201.167.230:5050',
        url: '/User/checkMobile',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
        },
        data: body,
      }).then((res) => {
        console.log(res);
        if (res?.data.status === "Success") {
          setValidationCodeInput(true);
          setValidationCode(true);
        } else {
          setError("مشکلی رخ داده است");
        }
      })
      .finally(() => setLoading(false));
  }


  const loginUser = async (e, body) => {
    e.preventDefault();
      setLoading(true);
      axios({
        baseURL:'https://138.201.167.230:5050',
        url: '/User/adminLogin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
        },
        data: body,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.data.status === "NotFound") {
          setError(res?.data.data?.message);
        }
        if (res.data.status === "Success") {
          console.log(res.data.data.token);
          const token = res.data.data.token;

          if (!token) {
            setError("مشکلی رخ داده است. لطفا دوباره تلاش کنید");
            return;
          }
          localStorage.clear();
          localStorage.setItem("user-token", token);
          setAccessToken(token);
          setValidationCodeInput(false)
          setValidationCode(null)
          setLoginInfo({
            mobile: "",
            verifyCode: "",
          })
          setTimeout(() => {
            navigate("/admin/dashboard");
          }, 500);
        }
      })
      .finally(() => setLoading(false));
    
  };
 
  
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
        getVerificationCode,
        loginUser,
        validationCode,
        validationCodeInput,
        userInfo,
        responseMsg,
        accessToken,
        setAccessToken,
        loading,
        loginInfo,
        setLoginInfo,
        error
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;