import { BiTrash } from "react-icons/bi";

const TodoItem = ({ item, onChecked, onDelete }) => {
  return (
    <div
      className={`px-3 py-2 w-full mb-2 flex items-center bg-gray-300 rounded-md shadow-md`}
    >
      <p
        onClick={onChecked}
        className={`flex-grow text-sm Dirooz ${
          item.checked && "line-through text-gray-500"
        }`}
      >
        {item.value}
      </p>
      <button onClick={onDelete} className={`text-xl text-blue-400`}>
        <BiTrash />
      </button>
    </div>
  );
};

export default TodoItem;
