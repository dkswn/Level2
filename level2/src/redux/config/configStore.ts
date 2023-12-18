import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../modules/todosSlice";
// 리덕스 툴킷
// configStore은 모듈이 여러개인 경우 추가할때마다  slice.reducer를 추가해줘야함.

const store = configureStore({
  reducer: { todosSlice: todosSlice },
});
export default store;
