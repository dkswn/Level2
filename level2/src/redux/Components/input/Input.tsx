import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { add_Todo } from "../../modules/todosSlice";
import { StyledButton, FlexDiv, StyledDiv } from "./style";
import LabledInput from "../common/LabledInput";
import HeightBox from "../common/HeightBox";
import RightMarginBox from "../common/RightMarginBox";

function Input() {
  const dispatch = useDispatch();

  type TodoType = {
    title: string;
    contents: string;
    isDone: boolean;
    id: string;
  };

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const getErrorMsg = (errorCode: string, params: TodoType) => {
    switch (errorCode) {
      case "01":
        return alert(
          `[필수 입력 값 검증 실패 안내]\n\n제목과 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n입력된 값(제목 : '${params.title}', 내용 : '${params.contents}')`
        );
      case "02":
        return alert(
          `[내용 중복 안내]\n\n입력하신 제목('${params.title}')및 내용('${params.contents}')과 일치하는 TODO는 이미 TODO LIST에 등록되어 있습니다.\n기 등록한 TODO ITEM의 수정을 원하시면 해당 아이템의 [상세보기]-[수정]을 이용해주세요.`
        );
      default:
        return `시스템 내부 오류가 발생하였습니다. 고객센터로 연락주세요.`;
    }
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const handleSubmitButtonClick = async (event: FormEvent) => {
    event.preventDefault();

    if (!title || !contents) {
      return getErrorMsg("01", { title, contents, isDone: false, id: "" });
    }

    const newTodo: TodoType = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };

    dispatch(add_Todo(newTodo));

    setTitle("");
    setContents("");
  };

  return (
    <StyledDiv>
      <form onSubmit={handleSubmitButtonClick}>
        <FlexDiv>
          <RightMarginBox margin={10}>
            <LabledInput
              id="title"
              label="제목"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={handleTitleChange}
            />
            <HeightBox height={10} />
            <LabledInput
              id="contents"
              label="내용"
              placeholder="내용을 입력해주세요."
              value={contents}
              onChange={handleContentsChange}
            />
          </RightMarginBox>
          <StyledButton type="submit">제출</StyledButton>
        </FlexDiv>
      </form>
    </StyledDiv>
  );
}

export default Input;
