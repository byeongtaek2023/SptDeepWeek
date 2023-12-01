import React from "react";
import Header from "components/Header";
import Form from "components/Form";
import Foter from "components/Foter";
import Layout from "components/Layout";
import api from "../axios/api";
import { auth } from "redux/modules/authSlice";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  //지속 로그인

  // const token = JSON.parse(localStorage.getItem("로그인"))
  const accessToken = localStorage.getItem("토큰");
  // authorization 속성 정의
  const persist = async () => {
    const response = await api.get(`/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(auth(response));
    console.log("연동완료", response);
    return persist;
  };

  return (
    <div>
      <Layout />
      <Header />
      <Form />
      <Foter />
    </div>
  );
}

export default Home;
