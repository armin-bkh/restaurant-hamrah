import { useEffect, useState } from "react";
import { deleteProductFilter } from "../../../Services/deleteProductFilter";
import { deleteUserFilter } from "../../../Services/deleteUserFilter";
import styles from "./Group.module.scss";
import { BiChevronDown } from "react-icons/bi";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import GroupItem from "./GroupItem/GroupItem";

const Group = ({ title, group, setGroup }) => {
  const [filterGroup, setFilterGroup] = useState(null);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const filteredGroup = group.filter((it) => it.value !== "همه");
    setFilterGroup(filteredGroup);
    let h = 0;
    filteredGroup.map((it) => (h += 62));
    setHeight(h);
  }, []);

  const deleteFilterItemHandler = async (id) => {
    try {
      if (title === "محصولات") {
        await deleteProductFilter(id);
        const filteredGroup = filterGroup.filter((it) => it.id !== id);
        setFilterGroup(filteredGroup);
        let h = 0;
        filteredGroup.map((it) => (h += 62));
        setHeight(h);
      } else {
        await deleteUserFilter(id);
        const filteredGroup = filterGroup.filter((it) => it.id !== id);
        setFilterGroup(filteredGroup);
        let h = 0;
        filteredGroup.map((it) => (h += 62));
        setHeight(h);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <article
      style={{ height: open ? `${height + 91}px` : "5rem" }}
      className={`boxShadow rounded-md p-5 my-4 overflow-hidden ${styles.hTransition}`}
    >
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
        {filterGroup
          ? filterGroup.map((it, index) => (
              <GroupItem
                key={it.id}
                index={index + 1}
                label={it.value}
                onDelete={() => deleteFilterItemHandler(it.id)}
              />
            ))
          : null}
      </ul>
    </article>
  );
};

export default Group;
