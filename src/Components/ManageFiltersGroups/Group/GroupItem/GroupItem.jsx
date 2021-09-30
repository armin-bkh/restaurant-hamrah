import { BiTrash } from "react-icons/bi";

const GroupItem = ({ label, index, onDelete }) => {
  return (
    <li
      className={`px-3 flex items-center justify-between Dirooz text-gray-700 text-lg font-medium border-b border-blue-300`}
    >
      <div className={`flex items-center`}>
        <span className={`text-blue-400 p-2 ml-5`}>{index}</span>
        <p className={`py-4`}>{label}</p>
      </div>
      <button
        onClick={onDelete}
        className={`p-2 rounded-full bg-blue-400 text-white`}
      >
        <BiTrash />
      </button>
    </li>
  );
};

export default GroupItem;
