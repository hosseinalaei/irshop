import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

// TODOO : redirect if token was empty

const useAxios = () => {
  const history = useNavigate();
  const { setAccessToken, setUserInfo } = React.useContext(AuthContext);
  const accessToken = localStorage.getItem('user-token');

  const axiosInstance = axios.create({
    baseURL: 'https://138.201.167.230:5050',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.response.use(
    async (res) => res.data,
    (error) => {
      if (!accessToken) {
        history('/auth/login');
        localStorage.clear();
      }
      if (error.response.status === 401) {
        history('/auth/login');
        localStorage.clear();
        setAccessToken('');
      }
      if (error.response.status === 503) {
        history('/auth/503');
      }
      if (error.response.status === 500) {
        history('/auth/500');
      }
      if (error.response.status === 302) {
        history(error.response.data.errors.redirect);
      }
      if (error.response.status === 403) {
        history(`/auth/${error.response.data.errors.redirect}`);
      }
      return Promise.reject(error);
    },
  );
  return axiosInstance;
};
export default useAxios;
