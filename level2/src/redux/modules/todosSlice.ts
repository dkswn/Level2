import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface todosState {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}
const initialState: todosState[] = [
  {
    id: uuidv4(),
    title: "제목1",
    contents: "내용1",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목2",
    contents: "내용2",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목3",
    contents: "내용3",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목4",
    contents: "내용4",
    isDone: false,
  },
];
const todosSlice = createSlice({
  name: "todos", // 모듈의 이름
  initialState, // 모듈의 초기상태
  reducers: {
    add_Todo: (state, action) => {
      return [...state, action.payload];
    },
    remove_Todo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    switch_Todo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

export const { add_Todo, remove_Todo, switch_Todo } = todosSlice.actions;
export default todosSlice.reducer;
