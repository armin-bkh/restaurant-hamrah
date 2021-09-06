import { useState } from "react";
import { postProduct } from "../../Services/postProduct";
import styles from "./ManageAddProduct.module.scss";

const ManageAddProduct = () => {
  const [error, setError] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "",
    price: "",
    information: "",
    materials: "",
    filter: "",
    img: "",
  });
  const changeHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      if (
        formValue.title &&
        formValue.price &&
        formValue.information &&
        formValue.filter &&
        formValue.img &&
        formValue.materials
      ) {
        await postProduct(formValue);
        setFormValue({
          title: "",
          price: "",
          information: "",
          materials: "",
          filter: "",
          img: "",
        });
      }
    } catch (err) {
      setError(true);
    }
  };
  return (
    <form className={`text-white flex flex-col`} onSubmit={sumbitHandler}>
      <label className={`mb-3`} htmlFor="title">
        نام غذا:{" "}
      </label>
      <input
        className={`mb-5 bg-transparent rounded-md px-5 py-3 outline-none ${styles.boxShadowInner}`}
        type="text"
        id="title"
        name="title"
        value={formValue.title}
        onChange={changeHandler}
      />
      <label className={`mb-3`} htmlFor="price">
        قیمت:{" "}
      </label>
      <input
        className={`mb-5 bg-transparent rounded-md px-5 py-3 outline-none ${styles.boxShadowInner}`}
        type="text"
        id="price"
        name="price"
        value={formValue.price}
        onChange={changeHandler}
      />
      <label className={`mb-3`} htmlFor="information">
        توضیحات:{" "}
      </label>
      <textarea
        rows="5"
        className={`mb-5 bg-transparent rounded-md px-5 py-3 outline-none ${styles.boxShadowInner}`}
        id="information"
        name="information"
        value={formValue.information}
        onChange={changeHandler}
      ></textarea>
      <label className={`mb-3`} htmlFor="filter">
        دسته بندی:{" "}
      </label>
      <input
        className={`mb-5 bg-transparent rounded-md px-5 py-3 outline-none ${styles.boxShadowInner}`}
        type="text"
        id="filter"
        name="filter"
        value={formValue.filter}
        onChange={changeHandler}
      />
      <label className={`mb-3`} htmlFor="materials">
        مخلفات:{" "}
      </label>
      <textarea
        className={`mb-5 bg-transparent rounded-md px-5 py-3 outline-none ${styles.boxShadowInner}`}
        id="materials"
        name="materials"
        value={formValue.materials}
        onChange={changeHandler}
      ></textarea>
      <label className={`mb-3`} htmlFor="img">
        عکس غذا:{" "}
      </label>
      <input
        className={`cursor-pointer`}
        value={formValue.img}
        type="file"
        id="img"
        accept=".jpg, .jpeg, .png"
        name="img"
        onChange={changeHandler}
      />
      <button type="submit" className={`mt-10 bg-gradient-to-l from-yellow-400 to-red-700 py-2`}>ثبت</button>
    </form>
  );
};

export default ManageAddProduct;
