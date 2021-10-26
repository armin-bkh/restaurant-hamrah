import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { FcTodoList } from "react-icons/fc";

const TodoList = ({ todos, onChecked, onDelete }) => {
  return (
    <article className={`mt-5 flex flex-col justify-center items-center`}>
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            item={todo}
            onDelete={() => onDelete(todo.id)}
            onChecked={() => onChecked(todo.id)}
          />
        ))
      ) : (
        <h1
          className={`flex text-white items-center Dirooz text-2xl font-bold`}
        >
          <FcTodoList className={"ml-3"} /> لیست خالی میباشد
        </h1>
      )}
    </article>
  );
};

export default TodoList;
