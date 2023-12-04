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
