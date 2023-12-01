import React, { useState } from "react";
import useInput from "../hooks/useInput";

const Login = () => {
  const [id, idInputHandler, setId] = useInput();
  const [pw, pwInputHandler, setPw] = useInput();
  const [nick, nickInputHandler, setNick] = useInput();
  const [data, setData] = useState({ id: "", pw: "", nick: "" });
  const [islogin, setIsLogin] = useState(true);
  // 아이디는 4~10글자로, 비밀번호는 4~15글자로, 닉네임은 1~10글자로 제한하세요.

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
          value={pw}
          onChange={pwInputHandler}
          placeholder="비밀번호(비밀번호는 4~15글자로)"
          minLength={4}
          maxLength={15}
        />
      </div>
      {!islogin && (
        <input
          value={nick}
          onChange={nickInputHandler}
          placeholder="닉네임 (1~10글자)"
          minLength={1}
          maxLength={10}
        />
      )}
      <div>
        <button disable={islogin ? !id || !pw : !id || !pw || !nick}>
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
