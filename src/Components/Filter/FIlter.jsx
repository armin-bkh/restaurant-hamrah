import { useEffect, useState } from "react";
import RadioIComponent from "../Common/RadioIComponent/RadioIComponent";
import styles from "./Filter.module.scss";
import { getFoodFilters } from "../../Services/getFoodFilters";

const Filter = ({ onFilter }) => {
  const [filter, setFilter] = useState("همه");
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    const getFilters = async () => {
      const { data } = await getFoodFilters();
      setFilters(data);
    };
    getFilters();
  }, []);

  const changeHandler = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <article
      className={`flex justify-start items-center px-3 py-4 overflow-y-hidden overflow-x-auto ${styles.filterContainer}`}
    >
      {filters && filters.length
        ? filters.map((fil) => (
            <RadioIComponent
              key={fil.id}
              value={fil.value}
              name="filRes"
              filterCur={filter}
              onChange={changeHandler}
            />
          ))
        : null}
    </article>
  );
};

export default Filter;
