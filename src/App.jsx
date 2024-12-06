import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoParent from "./components/TodoParent";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([
    {
      todoName: "Task1",
      todoBody: "Task about",
      id: 345,
      todoStatus: "bajarilmagan",
    },
  ]);
  return (
    <>
      <Header list={list} setList={setList} />
      <main className="grow">
        <div className="container mx-auto py-10">
          <TodoParent setList={setList} list={list}></TodoParent>
        </div>
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </>
  );
}
