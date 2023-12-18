import Input from "../redux/Components/input";
import TodoList from "../redux/Components/Todo";
import { v4 as uuidv4 } from "uuid";

function Home() {
  return (
    <>
      <Input />
      <TodoList
        isActive={true}
        todo={{
          id: uuidv4(),
          title: "",
          contents: "",
        }}
      />
      <TodoList
        isActive={false}
        todo={{
          id: uuidv4(),
          title: "",
          contents: "",
        }}
      />
    </>
  );
}

export default Home;
