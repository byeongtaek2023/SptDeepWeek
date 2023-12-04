import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import api from "../axios/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "redux/modules/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, idInputHandler, setId] = useInput();
  const [password, passwordInputHandler, setPw] = useInput();
  const [nickname, nicknameInputHandler, setNick] = useInput();
  const [islogin, setIsLogin] = useState(true);
  
  // 아이디는 4~10글자로, 비밀번호는 4~15글자로, 닉네임은 1~10글자로 제한하세요.

  //회원가입
  const signUpHandler = async () => {
    try {
      const response = await api.post("/register", { id, password, nickname });
      console.log("회원가입 완료", response);
      navigate(`/`);
    } catch (error) {
      alert("회원가입 중 오류");
      console.error("회원가입 중 오류", error);
    }
  };
  //로그인
  const loginHandler = async () => {
    try {
      const response = await api.post("/login?expiresIn=1m", { id, password });
      dispatch(auth(response.data));
      localStorage.setItem("토큰", response.data.accessToken);
      // localStorage.setItem("로그인",JSON.stringify(response.data))
      console.log("로그인완료", response);
      navigate(`/home`);
    } catch (error) {
      alert("로그인 실패");
      console.error("로그인 실패", error);
    }
  };

  

  return (
    <>
      <h1>{islogin ? "로그인" : "회원가입"}</h1>
      <div>
        <input
          value={id}
          onChange={idInputHandler}
          placeholder="ID (4~10글자)"
          minLength={4}
          maxLength={10}
        />
        <br />
        <input
          value={password}
          onChange={passwordInputHandler}
          placeholder="비밀번호(비밀번호는 4~15글자로)"
          minLength={4}
          maxLength={15}
        />
      </div>
      {!islogin && (
        <input
          value={nickname}
          onChange={nicknameInputHandler}
          placeholder="닉네임 (1~10글자)"
          minLength={1}
          maxLength={10}
        />
      )}
      <div>
        <button
          onClick={islogin ? loginHandler : signUpHandler}
          disabled={islogin ? !id || !password : !id || !password || !nickname}
        >
          {islogin ? "로그인" : "회원가입"}
        </button>

        <button onClick={() => setIsLogin((t) => !t)}>
          {islogin ? "회원가입" : "로그인"}
        </button>
      </div>
    </>
  );
};

export default Login;
