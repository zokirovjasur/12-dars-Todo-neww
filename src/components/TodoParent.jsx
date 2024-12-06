import { useState } from "react";
import TodoItem from "./TodoItem";
import { deleteTodo, editTodo } from "../crud";
export default function TodoParent({ list, setList }) {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {list.length > 0 ? (
        list.map(({ todoName, id, todoBody, todoStatus }) => {
          return (
            <li key={id}>
              <TodoItem
                id={id}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                setList={setList}
                list={list}
                title={todoName}
                description={todoBody}
                status={todoStatus}
              ></TodoItem>
            </li>
          );
        })
      ) : (
        <li className="text-center">No data</li>
      )}
    </ul>
  );
}
