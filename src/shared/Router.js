import Home from "pages/Home";
import React, { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Details from "pages/Details";
import Profile from "pages/Profile";
import Login from "pages/Login";
import Layout from "components/Layout";
import { useDispatch } from 'react-redux';
import { __addPost } from 'redux/modules/rerenderSlice';
import json from '../axios/json';
import api from '../axios/api';
import { auth } from 'redux/modules/authSlice';

const AuthenticatedRoutes = () => {

  return (
    <Outlet>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      {/* 필요한 만큼 더 많은 경로를 추가하세요 */}
    </Outlet>
  );
};

const Router = () => {
  const isLogin = false;
  const dispatch = useDispatch();
  //지속 로그인
  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("로그인"))
    const accessToken = localStorage.getItem("토큰");
    // authorization 속성 정의
    if (accessToken) {
      api
        .get(`/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          dispatch(auth(response.data));
          console.log("로그인지속", response);
        })
        .catch((error) => {
          // alert("다시 로그인 해주세요");

          console.error("유효하지않은 토큰", error);
        });
    }
  }, []); 


  return (
    <BrowserRouter>
      {isLogin ? (
        <Layout>
          <AuthenticatedRoutes />
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
