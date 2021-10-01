import { useState } from "react";
import { deleteProductFilter } from "../../../Services/deleteProductFilter";
import { deleteUserFilter } from "../../../Services/deleteUserFilter";
import { getFoodFilters } from "../../../Services/getFoodFilters";
import { getUserFilters } from "../../../Services/getUserFilters";
import { BiChevronDown } from "react-icons/bi";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import GroupItem from "./GroupItem/GroupItem";

const Group = ({ title, groups, setGroups }) => {
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const deleteFilterItemHandler = async (id) => {
    try {
      if (title === "محصولات") {
        await deleteProductFilter(id);
        const food = await getFoodFilters();
        const job = await getUserFilters();
        const filters = [
          ["محصولات", food.data],
          ["پرسنل", job.data],
        ];
        setGroups(filters);
      } else {
        await deleteUserFilter(id);
        const food = await getFoodFilters();
        const job = await getUserFilters();
        const filters = [
          ["محصولات", food.data],
          ["پرسنل", job.data],
        ];
        setGroups(filters);
      }
    } catch (err) {
      setError(true);
    }
  };
  return (
    <article className={`boxShadow rounded-md p-5 my-4 transition ${!open ? 'h-20 overflow-hidden' : ' h-auto'}`}>
      <header
        onClick={() => setOpen((prevState) => !prevState)}
        className={`flex cursor-pointer items-center justify-between`}
      >
        <h1 className={`text-gray-900 font-bold text-2xl Dirooz`}>
          {!open ? (
            <FaFolder className={`inline text-blue-400 ml-3`} />
          ) : (
            <FaFolderOpen className={`inline text-blue-400 ml-3`} />
          )}
          دسته بندی {title}
        </h1>
        <BiChevronDown
          className={`text-3xl text-blue-400 transition-transform ${
            open && "transform rotate-90"
          }`}
        />
      </header>
      <ul className={`mt-5`}>
        {groups.map((it, index) => (
          <GroupItem
            key={it.id}
            index={index + 1}
            label={it.value}
            onDelete={() => deleteFilterItemHandler(it.id)}
          />
        ))}
      </ul>
    </article>
  );
};

export default Group;
