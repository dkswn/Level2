import { useNavigate, useParams } from "react-router-dom";
import {
  StyledDiv,
  StyledTable,
  StyledTh,
  StyledButton,
} from "../DetailBox/Styles";
import { useSelector } from "react-redux";
import { ReactNode } from "react";

function DetailBox() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  console.log(params);

  const filteredTodos = useSelector(
    (state: {
      todos: {
        title: ReactNode;
        contents: ReactNode;
        isDone: any;
        id: string;
      }[];
    }) => {
      return state.todos.filter((item) => item.id === params.id);
    }
  );
  const todo = filteredTodos[0];
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <StyledDiv>
      <h3>TODO 상세페이지</h3>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTh>KEY</StyledTh>
            <StyledTh>VALUE</StyledTh>
          </tr>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>{todo?.id}</StyledTh>
          </tr>
          <tr>
            <StyledTh>TITLE</StyledTh>
            <StyledTh>{todo?.title}</StyledTh>
          </tr>
          <tr>
            <StyledTh>CONTENTS</StyledTh>
            <StyledTh>{todo?.contents}</StyledTh>
          </tr>
          <tr>
            <StyledTh>완료여부</StyledTh>
            <StyledTh>{todo?.isDone ? "완료" : "미완료"}</StyledTh>
          </tr>
        </tbody>
      </StyledTable>
      <StyledButton onClick={handleButtonClick}>
        이전 페이지로 가기
      </StyledButton>
    </StyledDiv>
  );
}

export default DetailBox;
