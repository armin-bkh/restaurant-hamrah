import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { getFoodFilters } from "../../../Services/getFoodFilters";
import { getAllProducts } from "../../../Services/getAllProducts";
import { getOneProduct } from "../../../Services/getOneProduct";
import { putProduct } from "../../../Services/putProduct";
import ManageInputForm from "../../Common/ManageInputForm/ManageInputForm";
import SearchBox from "../../Common/SearchBox/SearchBox";
import SelectBox from "../../Common/SelectBox/SelectBox";
import EditFoodLoadingSkeleton from "../../LoadingSkeleton/EditFoodLoadingSkeleton/EditFoodLoadingSkeleton";
import FoodLoadingSkeleton from "../../LoadingSkeleton/FoodLoadingSkeleton/FoodLoadingSkeleton";
import SelectBoxLoadingSkeleton from "../../LoadingSkeleton/SelectBoxLoadingSkeleton/SelectBoxLoadingSkeleton";
import ManageAddFilter from "../../ManageAddFilter/ManageAddFilter";
import ManageProductItem from "../ManageProductItem/ManageProductItem";
import * as Yup from "yup";
import { useFormik } from "formik";
import ManageOffInput from "../../Common/ManageOffInput/ManageOffInput";
import { scryRenderedDOMComponentsWithClass } from "react-dom/cjs/react-dom-test-utils.production.min";

const ManageEditProduct = () => {
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState(null);
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("همه");
  const [filters, setFilters] = useState(null);
  const [search, setSearch] = useState("");
  const { addToast } = useToasts();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllProducts();
        const filterL = await getFoodFilters();
        setFilters(filterL.data);
        setProducts(data);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (products) {
      if (search) searchProductsHandler(search);
      else filterProductsHandler(filter);
    }
  }, [products]);

  const editProductHandler = (id) => {
    setProductId(id);
  };

  const filterProductsHandler = (selectedOption) => {
    setSearch("");
    setProductId("");
    const selectedOptionValue = selectedOption?.value || selectedOption;
    setFilter(selectedOptionValue);
    const filteredProducts = products.filter(
      (pr) => pr.filter === selectedOptionValue
    );
    if (selectedOptionValue === "همه") {
      setProductList(products);
      if (!products.length) setError(true);
      else setError(false);
      return;
    }
    setProductList(filteredProducts);
    if (!filteredProducts.length) setError(true);
    else setError(false);
  };

  const searchProductsHandler = (value) => {
    setSearch(value);
    setProductId("");
    const filteredProducts = products.filter((pr) => pr.filter === filter);
    const searchedProducts = filteredProducts.filter((pr) =>
      pr.title.toLowerCase().includes(value.toLowerCase())
    );
    if (value.length > 0) {
      if (filter === "همه") {
        const searchedProductsInAll = products.filter((pr) =>
          pr.title.toLowerCase().includes(value.toLowerCase())
        );
        setProductList(searchedProductsInAll);
        if (!searchedProductsInAll.length) setError(true);
        else setError(false);
        return;
      }
      setProductList(searchedProducts);
      if (!searchedProducts.length) setError(true);
      else setError(false);
    } else {
      if (filter === "همه") {
        setProductList(products);
        if (!products.length) setError(true);
        else setError(false);
        return;
      } else {
        setProductList(filteredProducts);
        if (!filteredProducts.length) setError(true);
        else setError(false);
      }
    }
  };

  const submitHandler = async (formValue) => {
    try {
      await setProductList(null);
      await setProducts(null);
      await putProduct(productId, formValue);
      await setProductId(null);
      const { data } = await getAllProducts();
      setProducts(data);
      addToast("تغییرات اعمال شد", { appearance: "success" });
    } catch (error) {
      setError(true);
      addToast("مجددا تلاش کنید", { appearance: "error" });
    }
  };

  const returnError = () => {
    if (filter.value !== "همه") return "این دسته بندی خالی است";
    if (search) return "غذای مورد نظر یافت نشد";
    return "فهرست غذا خالی است";
  };

  let returnValue = Array(15)
    .fill()
    .map((item, index) => <FoodLoadingSkeleton key={index} />);

  if (error) {
    returnValue = (
      <h1
        className={`text-blue-400 text-center py-20 lg:p-32 text-lg lg:text-3xl Casablanca`}
      >
        {returnError()}
      </h1>
    );
  }
  if (productList && !error) {
    returnValue = productList.map((pr) => {
      if (pr.id === productId) {
        return (
          <EditProduct
            key={pr.id}
            productId={productId}
            onSubmit={submitHandler}
          />
        );
      } else
        return (
          <ManageProductItem
            key={pr.id}
            inf={pr}
            onSubmit={editProductHandler}
            type="edit"
          />
        );
    });
  }

  return (
    <article className={`text-black boxShadowInner pt-4 rounded-md  pb-1 px-4`}>
      <header
        className={`flex flex-col md:flex-row md:items-center md:justify-between pb-4`}
      >
        {filters ? (
          <>
            <SearchBox value={search} onSearch={searchProductsHandler} />
            <SelectBox
              value={filter}
              options={filters}
              onChange={filterProductsHandler}
              placeholder="دسته بندی..."
            />
          </>
        ) : (
          <>
            <SelectBoxLoadingSkeleton />
            <SelectBoxLoadingSkeleton />
          </>
        )}
      </header>
      <ul>{returnValue}</ul>
    </article>
  );
};

export default ManageEditProduct;

const validationSchema = Yup.object({
  id: Yup.number().required(),
  title: Yup.string().required("نام غذا ضروری است"),
  price: Yup.string()
    .required("قیمت غذا ضروری است")
    .matches(/^([0-9])+$/, "قیمت غذا باید عدد باشد"),
  off: Yup.string()
    .notRequired()
    .max(3, "تخفیف بیش از حد مجاز است")
    .matches(/^([0-9])+$/, "تخفیف غذا باید عدد باشد"),
  information: Yup.string().required("توضیحات غذا ضروری است"),
  materials: Yup.string().required("مخلفات غذا ضروری است"),
  filter: Yup.string().required("دسته بندی غذا ضروری است"),
  img: Yup.string().notRequired(),
  pin: Yup.boolean().notRequired(),
});

const EditProduct = ({ onSubmit, productId }) => {
  const [formValue, setFormValue] = useState(null);
  const formik = useFormik({
    onSubmit: (values) => onSubmit(values),
    initialValues: formValue,
    validationSchema,
    enableReinitialize: true,
    validateOnMount: true,
  });
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState(null);
  const { addToast } = useToasts();

  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        try {
          const product = await getOneProduct(productId);
          const filterL = await getFoodFilters();
          setFormValue(product.data);
          setFilters(filterL.data);
        } catch (err) {
          setError(true);
          addToast("مجددا تلاش کنید", { appearance: "error" });
        }
      };
      getProduct();
    }
  }, []);

  let returnValue;

  if (productId) {
    returnValue = <EditFoodLoadingSkeleton />;
  }

  if (formValue && !error && filters) {
    returnValue = (
      <li className={`boxShadow`}>
        <ManageAddFilter setFilters={setFilters} type="foods" />
        <form
          onSubmit={formik.handleSubmit}
          className={`flex text-black flex-col w-full my-3 items-center rounded-md px-4 py-3`}
        >
          <ManageInputForm
            formik={formik}
            lbl={"نام غذا"}
            type="text"
            name="title"
            {...formik.getFieldProps("title")}
          />
          <ManageInputForm
            formik={formik}
            lbl={"قیمت"}
            type="text"
            name="price"
            {...formik.getFieldProps("price")}
          />
          <ManageOffInput
            lbl="تخفیف"
            name="off"
            formik={formik}
            value={formik.values.off}
            {...formik.getFieldProps("off")}
          />
          <fieldset className={`flex-col justify-center items-center w-full`}>
            <label className={`ml-3 text-sm md:text-lg`}>دسته بندی:</label>
            <SelectBox
              formik={formik}
              name="filter"
              value={formik.values.filter}
              options={filters.filter((op) => op.value !== "همه")}
              onChange={(selectedOption) =>
                formik.setFieldValue("filter", selectedOption.value)
              }
              onBlur={() => formik.setFieldTouched("filter", true)}
              placeholder="دسته بندی..."
            />
          </fieldset>
          <ManageInputForm
            formik={formik}
            lbl={"مخلفات"}
            type="textarea"
            name="materials"
            {...formik.getFieldProps("materials")}
          />
          <ManageInputForm
            formik={formik}
            lbl={"توضیحات"}
            type="textarea"
            name="information"
            {...formik.getFieldProps("information")}
          />
          <ManageInputForm
            formik={formik}
            lbl={"عکس غذا"}
            type="file"
            name="img"
            // value={formik.values.img}
            accept=".jpg, .jpeg, .png"
            onChange={(e) => formik.setFieldValue("img", e.terget.files[0])}
            onBlur={() => formik.setFieldTouched("img", true)}
          />

          <button
            className={`mt-10 py-2 w-full rounded-md Casablanca text-xl text-white ${
              formik.isValid
                ? "gradient"
                : "border-2 border-blue-400 text-blue-400 opacity-40 cursor-default"
            }`}
            type="submit"
            disabled={!formik.isValid}
          >
            ثبت
          </button>
        </form>
      </li>
    );
  }

  return returnValue;
};
