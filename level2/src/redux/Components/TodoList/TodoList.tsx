import React from "react";
import { StyledDiv, StyledTodoListHeader, StyledTodoListBox } from "./style";
import Todo from "../Todo";

interface TodoListProps {
  isActive: boolean;
  isLoading: boolean;
  isError: boolean;

  data: {
    id: string;
    isDone: boolean;
    title: string;
    contents: string;
  }[];
}

function TodoList({ isActive, isLoading, isError, data }: TodoListProps) {
  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <StyledDiv>
      <StyledTodoListHeader>
        {isActive ? "해야 할 일 ⛱" : "완료한 일 ✅"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {data
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </StyledDiv>
  );
}

export default TodoList;
