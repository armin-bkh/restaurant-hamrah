import { useState } from "react";
import { postProduct } from "../../Services/postProduct";
import { useToasts } from "react-toast-notifications";
import SelectBox from "../Common/SelectBox/SelectBox";
import ManageInputForm from "../Common/ManageInputForm/ManageInputForm";

const ManageAddProduct = () => {
  const [error, setError] = useState(false);
  const { addToast } = useToasts();
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
  const selectChangeHandler = (selectedOption) => {
    setFormValue({
      ...formValue,
      filter: selectedOption.value,
    });
  };
  const sumbitHandler = async (e) => {
    e.preventDefault();
    if (
      formValue.title &&
      formValue.price &&
      formValue.information &&
      formValue.filter &&
      formValue.img &&
      formValue.materials
    ) {
      try {
        await postProduct(formValue);
        setFormValue({
          title: "",
          price: "",
          information: "",
          materials: "",
          filter: "",
          img: "",
        });
        addToast(`اضافه شد`, { appearance: "success" });
      } catch (err) {
        setError(true);
        addToast(`مجددا تلاش کنید`, { appearance: "error" });
      }
    } else addToast("تمامیه اطلاعات ضروری است", { appearance: "error" });
  };
  return (
    <form
      className={`text-black flex flex-col p-4 rounded-md boxShadow`}
      onSubmit={sumbitHandler}
    >
      <ManageInputForm
        lbl="نام غذا"
        type="text"
        name="title"
        value={formValue.title}
        onChange={changeHandler}
      />
      <ManageInputForm
        lbl="قیمت"
        type="text"
        name="price"
        value={formValue.price}
        onChange={changeHandler}
      />
      <label className={`mb-3 text-sm xl:text-lg`}>
        دسته بندی:{" "}
      </label>
      <SelectBox value={formValue.filter} onChange={selectChangeHandler} />
      <ManageInputForm
        lbl="توضیحات"
        type="textarea"
        name="information"
        value={formValue.information}
        onChange={changeHandler}
      />
      <ManageInputForm
        lbl="مخلفات"
        type="textarea"
        name="materials"
        value={formValue.materials}
        onChange={changeHandler}
      />
      <ManageInputForm
        lbl="عکس غذا"
        type="file"
        name="img"
        accept=".jpg, .jpeg, .png"
        value={formValue.img}
        onChange={changeHandler}
      />
      <button
        type="submit"
        className={`mt-10 py-2 rounded-md FPArsoo text-xl text-white gradient`}
      >
        ثبت
      </button>
    </form>
  );
};

export default ManageAddProduct;
