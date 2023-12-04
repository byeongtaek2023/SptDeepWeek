import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedMem } from "redux/modules/membersSlice";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Button = styled.button`
background-color : ${(props) => {
  return props.$member ? "skyblue" : "transparent";
}};
 
  
  }

`;

function Header() {
  const dispatch = useDispatch();
  const catchMem = useSelector((state) => state.membersSlice);

  const members = ["카리나", "윈터", "닝닝", "지젤"];

  const buttonHanlder = (member) => {
    dispatch(selectedMem(member));
  };

  return (
    <StContainer>
      <h1>에스파 팬레터 콜렉션</h1>
      <div>
        {members.map((member) => {
          return (
            <Button
              key={member}
              onClick={() => {
                buttonHanlder(member);
              }}
              $member={member === catchMem}
            >
              {member}
            </Button>
          );
        })}
      </div>
    </StContainer>
  );
}

export default Header;
