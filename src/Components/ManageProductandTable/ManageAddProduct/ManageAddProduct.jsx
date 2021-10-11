import { useEffect, useState } from "react";
import { postProduct } from "../../../Services/postProduct";
import { useToasts } from "react-toast-notifications";
import SelectBox from "../../Common/SelectBox/SelectBox";
import ManageInputForm from "../../Common/ManageInputForm/ManageInputForm";
import ManageAddFilter from "../../ManageAddFilter/ManageAddFilter";
import { getFoodFilters } from "../../../Services/getFoodFilters";
import EditFoodLoadingSkeleton from "../../LoadingSkeleton/EditFoodLoadingSkeleton/EditFoodLoadingSkeleton";
import { useFormik } from "formik";
import * as Yup from "yup";

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  title: "",
  price: "",
  information: "",
  materials: "",
  filter: "",
  img: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("نام غذا ضروری است"),
  price: Yup.string().required("قیمت غذا ضروری است").matches(/^([0-9])+$/, 'قیمت غذا باید عدد باشد'),
  information: Yup.string().required("توضیحات غذا ضروری است"),
  materials: Yup.string().required("مخلفات غذا ضروری است"),
  filter: Yup.string().required("دسته بندی غذا ضروری است"),
  img: Yup.object().notRequired(),
});

const ManageAddProduct = () => {
  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    enableReinitialize: true,
    validateOnMount: true,
  });
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
        const { data } = await getFoodFilters();
        setFilters(data);
      } catch (err) {
        setError(true);
      }
    };
    getFilters();
  }, []);

  const changeHandler = (e) => {
    if (e.target.files) {
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
    console.log(formValue);
    // let formData = new FormData();

    // for (const key in formValue) {
    //   formData.append(key, formValue[key]);
    // }

    // if (
    //   formValue.title &&
    //   formValue.price &&
    //   formValue.information &&
    //   formValue.filter &&
    //   formValue.img &&
    //   formValue.materials
    // ) {
    //   try {
    //     await postProduct(formValue);
    //     setFormValue({
    //       title: "",
    //       price: "",
    //       information: "",
    //       materials: "",
    //       filter: "",
    //       img: "",
    //     });
    //     addToast(`اضافه شد`, { appearance: "success" });
    //   } catch (err) {
    //     setError(true);
    //     addToast(`مجددا تلاش کنید`, { appearance: "error" });
    //   }
    // } else addToast("تمامیه اطلاعات ضروری است", { appearance: "error" });
  };

  return (
    <article className={`rounded-md boxShadow`}>
      {filters ? (
        <>
          <ManageAddFilter setFilters={setFilters} type="foods" />
          <form
            className={`text-black flex flex-col p-4`}
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <ManageInputForm
              formik={formik}
              lbl="نام غذا"
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ManageInputForm
              formik={formik}
              lbl="قیمت"
              type="text"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className={`mb-3 text-sm xl:text-lg`}>دسته بندی: </label>
            <SelectBox
            formik={formik}
              value={formik.values.filter}
              name="filter"
              options={filters.filter((op) => op.value !== "همه")}
              onChange={(selecetedOption) =>
                formik.setFieldValue("filter", selecetedOption.value)
              }
              onBlur={() => formik.setFieldTouched("filter", true)}
              placeholder="دسته بندی..."
            />
            <ManageInputForm
              formik={formik}
              lbl="مخلفات"
              type="textarea"
              name="materials"
              value={formik.values.materials}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ManageInputForm
              formik={formik}
              lbl="توضیحات"
              type="textarea"
              name="information"
              value={formik.values.information}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ManageInputForm
              formik={formik}
              lbl="عکس غذا"
              type="file"
              name="img"
              value={formik.values.img}
              accept=".jpg, .jpeg, .png"
              onChange={(e) => formik.setFieldValue("img", e.target.files[0])}
              onBlur={() => formik.setFieldTouched("img", true)}
            />
            <button
              type="submit"
              className={`mt-10 py-2 rounded-md Casablanca text-xl text-white ${
                  formik.isValid
                  ? "gradient"
                  : "border-2 border-blue-400 text-blue-400 opacity-40 cursor-default"
              }`}
              disabled={!formik.isValid}
            >
              ثبت
            </button>
          </form>
        </>
      ) : (
        <EditFoodLoadingSkeleton />
      )}
    </article>
  );
};

export default ManageAddProduct;
