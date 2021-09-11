import { useState } from "react";
import RadioIComponent from "../Common/RadioIComponent/RadioIComponent"

const Filter = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  const changeHandler = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <article className={`flex justify-start items-center px-3 py-4 overflow-y-hidden overflow-x-auto`}>
      <RadioIComponent onChange={changeHandler} filterValue="all" filterState={filter} lbl="همه" />
      <RadioIComponent onChange={changeHandler} filterValue="kebab" filterState={filter} lbl="کباب" />
      <RadioIComponent onChange={changeHandler} filterValue="polo" filterState={filter} lbl="پلو" />
      <RadioIComponent onChange={changeHandler} filterValue="khoresht" filterState={filter} lbl="خورشت" />
      <RadioIComponent onChange={changeHandler} filterValue="salad" filterState={filter} lbl="سالاد" />
      <RadioIComponent onChange={changeHandler} filterValue="sandwich" filterState={filter} lbl="ساندویچ" />
      <RadioIComponent onChange={changeHandler} filterValue="cold" filterState={filter} lbl="سرد" />
      <RadioIComponent onChange={changeHandler} filterValue="warm" filterState={filter} lbl="گرم" />
      <RadioIComponent onChange={changeHandler} filterValue="fastfood" filterState={filter} lbl="فستفود" />
      <RadioIComponent onChange={changeHandler} filterValue="pizza" filterState={filter} lbl="پیتزا" />
      <RadioIComponent onChange={changeHandler} filterValue="drink" filterState={filter} lbl="نوشیدنی" />
    </article>
  );
};

export default Filter;
