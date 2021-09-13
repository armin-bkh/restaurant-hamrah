import { useEffect, useState } from "react";
import { postProduct } from "../../Services/postProduct";
import { useToasts } from "react-toast-notifications";
import SelectBox from "../Common/SelectBox/SelectBox";
import ManageInputForm from "../Common/ManageInputForm/ManageInputForm";
import ManageAddFilter from "../ManageAddFilter/ManageAddFilter";
import { getAllFilters } from "../../Services/getAllFilters";

const options = [
  { label: "کباب", value: "kebab" },
  { label: "خورشت", value: "khoresht" },
  { label: "پلو", value: "polo" },
  { label: "سالاد", value: "salad" },
  { label: "فست فود", value: "fast-food" },
  { label: "پیتزا", value: "pizza" },
  { label: "ساندویچ", value: "sandwitch" },
  { label: "سرد", value: "cold" },
  { label: "گرم", value: "warm" },
  { label: "نوشیدنی", value: "drink" },
];

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
  const [filter, setFilter] = useState("");
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    const getFilters = async () => {
      try {
        const { data } = await getAllFilters();
        setFilters(data);
      } catch (err) {
        setError(true);
      }
    };
    getFilters();
  }, []);

  const changeHandler = (e) => {
    if (e.target.files) {
      console.log("hello");
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.files[0],
      });
      return;
    }
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const selectChangeHandler = (selectedOption) => {
    setFilter(selectedOption);
    setFormValue({
      ...formValue,
      filter: selectedOption.value,
    });
  };
  const sumbitHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    for (const key in formValue) {
      formData.append(key, formValue[key]);
    }

    if (
      formValue.title &&
      formValue.price &&
      formValue.information &&
      formValue.filter &&
      formValue.img &&
      formValue.materials
    ) {
      try {
        await postProduct(formData);
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
  return filters ? (
    <section className={`rounded-md boxShadow`}>
      <ManageAddFilter setFilters={setFilters} />
      <form
        className={`text-black flex flex-col p-4`}
        onSubmit={sumbitHandler}
        encType="multipart/form-data"
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
        <label className={`mb-3 text-sm xl:text-lg`}>دسته بندی: </label>
        <SelectBox
          value={filter}
          options={filters}
          onChange={selectChangeHandler}
          placeholder="دسته بندی..."
        />
        <ManageInputForm
          lbl="مخلفات"
          type="textarea"
          name="materials"
          value={formValue.materials}
          onChange={changeHandler}
        />
        <ManageInputForm
          lbl="توضیحات"
          type="textarea"
          name="information"
          value={formValue.information}
          onChange={changeHandler}
        />
        <ManageInputForm
          lbl="عکس غذا"
          type="file"
          name="img"
          accept=".jpg, .jpeg, .png"
          onChange={changeHandler}
        />
        <button
          type="submit"
          className={`mt-10 py-2 rounded-md Casablanca text-xl text-white gradient`}
        >
          ثبت
        </button>
      </form>
    </section>
  ) : null;
};

export default ManageAddProduct;
