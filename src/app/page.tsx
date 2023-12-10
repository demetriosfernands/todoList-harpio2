import AddTodo from "@/components/add-todo";
import {Todos} from "@/components/todos";
import "./globals.css";
import { RiTodoLine } from "react-icons/ri";

const Page = () => {
    return (
      <main>
          <h2><RiTodoLine className="icons" />Teste prático da harpio <RiTodoLine className="icons" /> </h2>
          <AddTodo />
          <Todos />
      </main>
    );
};

export default Page;