import React from "react";
import { Provider, useSelector } from "react-redux";
import Router from "./shared/Router";
import store from "./redux/config/configStore";

const App: React.FC = () => {
  // Create the Redux store

  // Access the todos module state from the store
  const todos = useSelector((state: any) => state.todos);
  console.log(todos);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
