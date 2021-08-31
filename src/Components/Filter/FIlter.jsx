import { useState } from "react";
import RadioIComponent from "../Common/RadioIComponent/RadioIComponent"

const Filter = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  const changeHandler = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <article className={`flex justify-start items-center`}>
      <RadioIComponent onChange={changeHandler} filtervalue="all" filterState={filter} lbl="همه" />
      <RadioIComponent onChange={changeHandler} filtervalue="kebab" filterState={filter} lbl="کباب" />
      <RadioIComponent onChange={changeHandler} filtervalue="polo" filterState={filter} lbl="پلو" />
      <RadioIComponent onChange={changeHandler} filtervalue="khoresht" filterState={filter} lbl="خورشت" />
      <RadioIComponent onChange={changeHandler} filtervalue="salad" filterState={filter} lbl="سالاد" />
    </article>
  );
};

export default Filter;
