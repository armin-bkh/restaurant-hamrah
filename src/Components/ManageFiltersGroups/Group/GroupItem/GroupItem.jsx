import { BiTrash } from "react-icons/bi";
import styles from "./GroupItem.module.scss";

const GroupItem = ({ label, index, onDelete }) => {
  return (
    <li
      className={`px-3 flex items-center justify-between Dirooz text-gray-700 text-lg
       font-medium border-b border-blue-400 border-dashed ${styles.h62}`}
    >
      <div className={`flex items-center`}>
        <span className={`text-blue-400 p-2 ml-5`}>{index}</span>
        <p className={`py-4 text-sm md:text-lg lg:text-xl`}>{label}</p>
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
