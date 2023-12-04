import React, { useEffect } from "react";
import Header from "components/Header";
import Form from "components/Form";
import Foter from "components/Foter";
import Layout from "components/Layout";
import api from "../axios/api";
import { auth } from "redux/modules/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
           navigate(`/`);
          alert('다시 로그인 해주세요')

          console.error("유효하지않은 토큰", error);
        });
    }
}, []);

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
