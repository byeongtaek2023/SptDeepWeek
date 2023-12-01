import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "pages/Details";
import Profile from "pages/Profile";
import Login from "pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
