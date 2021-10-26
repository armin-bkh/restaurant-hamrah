import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const TodoListContainer = () => {
  const [todos, setTodos] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const addTodoHandler = (value) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        value,
        checked: false,
        id: new Date().getTime(),
      },
    ]);
  };

  const checkedTodoHandler = (id) => {
    const cloneTodos = [...todos];
    const index = cloneTodos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...cloneTodos[index] };
    selectedTodo.checked = !selectedTodo.checked;
    cloneTodos[index] = selectedTodo;
    setTodos(cloneTodos);
  };
  const deleteTodoHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <section
      className={`fixed z-40 -left-4 pl-3 overflow-y-auto top-0 h-full right-0 bg-gray-600 bg-opacity-40 flex justify-end`}
    >
      <div className={`w-full mt-10 md:mt-0 md:w-96 p-5`}>
        {isShow && <TodoForm onAdd={addTodoHandler} />}
        <TodoList
          todos={todos}
          onDelete={deleteTodoHandler}
          onChecked={checkedTodoHandler}
        />
        <button
          className={`bg-blue-400 text-white transition duration-500 rounded-full p-1 transform fixed bottom-10 right-5 ${
            !isShow && "rotate-180"
          } text-4xl`}
          onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
        >
          {isShow ? <IoMdClose /> : <BiPlus />}
        </button>
      </div>
    </section>
  );
};

export default TodoListContainer;
