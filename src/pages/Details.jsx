import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost } from "redux/modules/rerenderSlice";
import api from "../axios/api";

const Textarea = styled.textarea`
  width: 700px;
  height: 100px;
  resize: none;
`;

function Details() {
  const dispatch = useDispatch();
  const render = useSelector((state) => state.rerenderSlice);
  const auth = useSelector((state) => state.authSlice);

  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");



  // 같은 아이디 찾기
  const FindSameRenderData = render.find(
    (item) => item.id.toString() === id.toString()
  );
  // 인증한 사람이냐?
  const isCurrentUserAuthor = FindSameRenderData.userId === auth.data?.id;
  // 레터삭제
  const removeButtonHandler = (id) => {
    const askDelete = window.confirm("삭제하시겠습니까?");
    if (askDelete === true) {
      dispatch(deletePost(id));
      navigate("/home");
    }
  };

  // 내용수정
  const editButtonHandler = () => {
    setEditedContent(FindSameRenderData.content);
    setIsEditing(true);
  };
  //내용저장
  const saveButtonHandler = () => {
    if (editedContent === FindSameRenderData.content) {
      alert("아무런 수정사항이 없습니다.");
    }

    dispatch(editPost({ id: FindSameRenderData.id, content: editedContent }));
    // console.log("디테일문장값", editedContent);
    // console.log("랜더문장값", render);
    setIsEditing(false);
  };

  return (
    <li>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </button>
      <div>
        <img src={FindSameRenderData.avatar} alt={""} />
      </div>

      <div>
        <h3>{FindSameRenderData.nickname}</h3>
        {isEditing ? (
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <p>{FindSameRenderData.content}</p>
        )}
        <p>작성 대상: {FindSameRenderData.writedTo}</p>
        <p>작성 일자: {FindSameRenderData.createdAt}</p>
        {isEditing ? (
          <button onClick={saveButtonHandler}>저장</button>
        ) : (
          <>
            <button onClick={editButtonHandler}>수정</button>
            <button onClick={() => removeButtonHandler(FindSameRenderData.id)}>
              삭제
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default Details;
