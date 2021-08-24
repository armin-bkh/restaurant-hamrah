import { useState } from "react";
import { useProductsAction } from "../Provider/ProductsProvider";
import styles from "./Filter.module.scss";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const { filterProductsHandler } = useProductsAction();

  const changeHandler = (e) => {
    setFilter(e.target.value);
    filterProductsHandler(e.target.value);
  };

  return (
    <article className={`flex justify-start items-center`}>
      <div
        className={`shadow-md relative text-sm py-1 w-14 ml-2 rounded-full ${styles.inputContainer}`}
      >
        <input
          id="all"
          className={`hidden w-full h-full`}
          type="radio"
          checked={filter === "all" && true}
          value="all"
          onChange={changeHandler}
        />
        <label className={`flex justify-center items-center`} htmlFor="all">همه</label>
      </div>
      <div
        className={`shadow-md relative text-sm py-1 w-14 ml-2 rounded-full ${styles.inputContainer}`}
      >
        <input
          id="kebab"
          className={`hidden w-full h-full`}
          type="radio"
          checked={filter === "kebab" && true}
          value="kebab"
          onChange={changeHandler}
        />
        <label className={`flex justify-center items-center`} htmlFor="kebab">کباب ها</label>
      </div>
      <div
        className={`shadow-md relative text-sm py-1 w-14 ml-2 rounded-full ${styles.inputContainer}`}
      >
        <input
          id="polo"
          className={`hidden w-full h-full`}
          type="radio"
          checked={filter === "polo" && true}
          value="polo"
          onChange={changeHandler}
        />
        <label className={`flex justify-center items-center`} htmlFor="polo">پلو</label>
      </div>
      <div
        className={`shadow-md relative text-sm py-1 w-14 ml-2 rounded-full ${styles.inputContainer}`}
      >
        <input
          id="khoresht"
          className={`hidden w-full h-full`}
          type="radio"
          checked={filter === "khoresht" && true}
          value="khoresht"
          onChange={changeHandler}
        />
        <label className={`flex justify-center items-center`} htmlFor="khoresht">خورشت</label>
      </div>
      <div
        className={`shadow-md relative text-sm py-1 w-14 ml-2 rounded-full ${styles.inputContainer}`}
      >
        <input
          id="salad"
          className={`hidden w-full h-full`}
          type="radio"
          checked={filter === "salad" && true}
          value="salad"
          onChange={changeHandler}
        />
        <label className={`flex justify-center items-center`} htmlFor="salad">سالاد</label>
      </div>
    </article>
  );
};

export default Filter;
