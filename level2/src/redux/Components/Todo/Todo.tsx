import { useDispatch } from "react-redux";
import HeightBox from "../common/HeightBox";
import { remove_Todo, switch_Todo } from "../../modules/todosSlice";
import { useNavigate } from "react-router-dom";
import {
  StyledDiv,
  StyledTitle,
  StyledContents,
  TodoButton,
  FlexButtonBox,
  LinkedP,
  FlexTitleBox,
} from "./styles";

export interface TodoProps {
  todo: {
    id: string;
    title: string;
    contents: string;
  };
  isActive: boolean;
}

function Todo({ todo, isActive }: TodoProps) {
  const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${todo.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitchButton = () => dispatch(switch_Todo(todo.id));

  const handleRemoveButton = () => {
    if (window.confirm(CONFIRM_MESSAGE)) dispatch(remove_Todo(todo.id));
  };

  const handleDetailPageLinkClick = () => {
    navigate(`/${todo.id}`);
  };

  return (
    <StyledDiv>
      <FlexTitleBox>
        <StyledTitle>{todo.title}</StyledTitle>
        <LinkedP onClick={handleDetailPageLinkClick}>[상세보기]</LinkedP>
      </FlexTitleBox>
      <HeightBox height={10} />
      <StyledContents>{todo.contents}</StyledContents>
      <HeightBox height={20} />
      <FlexButtonBox>
        <TodoButton onClick={handleSwitchButton}>
          {isActive ? "완료" : "취소"}
        </TodoButton>
        <TodoButton onClick={handleRemoveButton}>삭제</TodoButton>
      </FlexButtonBox>
    </StyledDiv>
  );
}

export default Todo;
