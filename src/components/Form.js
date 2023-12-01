import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addPost } from "redux/modules/rerenderSlice";
import { selectedMem } from "redux/modules/membersSlice";
import useInput from "hooks/useInput";

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

function Form() {
  const dispatch = useDispatch();
  // const rerender = useSelector((state) => state.rerenderSlice);
  const catchMem = useSelector((state) => state.membersSlice);
  // console.log("Form이 렌더링되었습니다.");
  // const data = useContext(FamilyContext)
  // const [nickname, nicknameHandler, setNickname] = useInput("");
  const [content, contentHandler, setContent] = useInput("");
  const name = useSelector((state) => state.authSlice.nickname);
// console.log('폼',name);
  // //닉네임 입력값 가져오기
  // const nicknameHandler = (e) => {
  //   setNickname(e.target.value);
  // };

  // //내용 입력값 가져오기
  // const contentHandler = (e) => {
  //   setContent(e.target.value);
  // };

  //멤버 선택 값 가져오기
  const selectMem = (e) => {
    //Home state에 입력값
    dispatch(selectedMem(e.target.value));
  };

  // 코멘트 추가시 새로 작성
  const addCommentHandler = () => {
    //content, nickname 유효성 검사
    // if (nickname.trim() === "") {
    //   alert("닉네임을 입력해주세요.");
    //   return;
    // }

    if (content.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    const newCard = {
      id: uuid(),
      nickname: name,
      content: content,
      avatar:
        "https://images.unsplash.com/photo-1561962534-50ff147395c3?w=125&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fCVFQyU5RCVCNSVFQiVBQSU4NSVFQyU5RCU5OHxlbnwwfHwwfHx8MA%3D%3D",
      writedTo: catchMem,
      createdAt: new Date().toString(),
      isDone: false,
    };
    dispatch(addPost(newCard));
    // setNickname("");
    setContent("");
  };

  return (
    <StContainer>
      <div> 
      <label>닉네임: {name}</label>
      </div>
      {/* <span
        value=
        placeholder="최대 20글자까지 작성"
        maxLength={20}
        // onChange={nicknameHandler}
      /> */}
<div>
      <label>내용</label>
      <input
        value={content}
        placeholder="최대 100자까지만 작성"
        maxLength={100}
        onChange={contentHandler}
      /></div>
      <select value={catchMem} onChange={selectMem}>
        <option value="카리나">카리나</option>
        <option value="윈터">윈터</option>
        <option value="닝닝">닝닝</option>
        <option value="지젤">지젤</option>
      </select>
      <button onClick={addCommentHandler}>팬레터등록</button>
    </StContainer>
  );
}

export default Form;
