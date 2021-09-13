import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { getAllProducts } from "../../Services/getAllProducts";
import { getOneProduct } from "../../Services/getOneProduct";
import { putProduct } from "../../Services/putProduct";
import ManageInputForm from "../Common/ManageInputForm/ManageInputForm";
import SearchBox from "../Common/SearchBox/SearchBox";
import SelectBox from "../Common/SelectBox/SelectBox";
import EditFoodLoadingSkeleton from "../LoadingSkeleton/EditFoodLoadingSkeleton/EditFoodLoadingSkeleton";
import FoodLoadingSkeleton from "../LoadingSkeleton/FoodLoadingSkeleton/FoodLoadingSkeleton";
import ManageProductItem from "../ManageProductItem/ManageProductItem";
import { numberWithCommas } from "../utils/CommaNumber";

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

const filteroptions = [
  { label: "همه", value: "all" },
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

const ManageEditProduct = () => {
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState({ label: "همه", value: "all" });
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAllProducts();
        setProducts(data);
      } catch (error) {
        setError(true);
      }
    };
    getProducts();
  }, []);

  const editProductHandler = (id) => {
    setProductId(id);
  };

  const filterProductsHandler = async (selectedOption) => {
    setFilter(selectedOption);
    await setProducts(null);
    const { data } = await getAllProducts();
    const filteredProducts = data.filter(
      (pr) => pr.filter === selectedOption.value
    );
    if (selectedOption.value === "all") {
      setProducts(data);
      return;
    }
    setProducts(filteredProducts);
  };

  const searchProductsHandler = async (value) => {
    const { data } = await getAllProducts();
    setSearch(value);
    if (value.length > 0) {
      if(filter.value === "all"){
        setProducts(data.filter(pr => pr.title.toLowerCase().includes(value.toLowerCase())))
        return;
      }
      const filteredProducts = data.filter(pr => pr.filter === filter.value);
      setProducts(filteredProducts.filter((pr) =>
      pr.title.toLowerCase().includes(value.toLowerCase())));
    } else {
      if (filter.value === "all") {
        setProducts(data);
        return;
      } else {
        setProducts(data.filter((pr) => pr.filter === filter.value));
      }
    }
  };

  let returnValue = Array(15)
    .fill()
    .map((item, index) => <FoodLoadingSkeleton key={index} />);

  if (error) {
    returnValue = (
      <h1
        className={`text-blue-400 text-center py-20 lg:p-32 text-lg lg:text-3xl FPArsoo`}
      >
        فهرست غذا خالی است
      </h1>
    );
  }
  if (products && !error) {
    returnValue = products.map((pr) => {
      if (pr.id === productId) {
        return (
          <EditProduct
            key={pr.id}
            filterList={filter}
            productId={productId}
            setProducts={setProducts}
            setProductId={setProductId}
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
    <section className={`text-black boxShadowInner pt-4 rounded-md  pb-1 px-4`}>
      <header
        className={`flex flex-col md:flex-row md:items-center md:justify-between`}
      >
        <SearchBox onSearch={searchProductsHandler} />
        <SelectBox
          value={filter}
          options={filteroptions}
          onChange={filterProductsHandler}
          placeholder="دسته بندی..."
        />
      </header>
      <ul>{returnValue}</ul>
    </section>
  );
};

export default ManageEditProduct;

const EditProduct = ({ productId, setProducts, setProductId, filterList }) => {
  const [formValue, setFormValue] = useState(null);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("");
  const { addToast } = useToasts();

  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        try {
          const { data } = await getOneProduct(productId);
          setFormValue(data);
          const currFilter = options.filter((op) => op.value === data.filter);
          setFilter({ label: currFilter[0].label });
        } catch (error) {
          setError(true);
          addToast("مجددا تلاش کنید", { appearance: "error" });
        }
      };
      getProduct();
    }
  }, [productId]);

  const changeHandler = (e) => {
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

  const SubmitHandler = async (e) => {
    let formData = new FormData();

    for (const key in formValue){
      formData.append(key, formValue[key])
    }

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
        await putProduct(productId, { ...formData, id: productId });
        const { data } = await getAllProducts();
        if (filterList.value === "all") {
          setProducts(data);
        } else {
          setProducts(data.filter((pr) => pr.filter === filterList.value));
        }
        setProductId("");
        addToast("تغییرات اعمال شد", { appearance: "success" });
      } catch (error) {
        setError(true);
        addToast("مجددا تلاش کنید", { appearance: "error" });
      }
    } else addToast("تمامیه اطلاعات ضروری است", { appearance: "error" });
  };

  let returnValue;

  if (productId) {
    returnValue = <EditFoodLoadingSkeleton />;
  }

  if (formValue && !error) {
    returnValue = (
      <form
        onSubmit={SubmitHandler}
        className={`flex text-black flex-col w-full my-3 items-center rounded-md px-4 py-3 boxShadow`}
      >
        <ManageInputForm
          lbl={"نام غذا"}
          type="text"
          name="title"
          value={formValue.title}
          onChange={changeHandler}
        />
        <ManageInputForm
          lbl={"قیمت"}
          type="text"
          name="price"
          value={formValue.price}
          onChange={changeHandler}
        />
        <fieldset className={`flex-col justify-center items-center w-full`}>
          <label className={`ml-3 text-sm md:text-lg`}>دسته بندی:</label>
          <SelectBox
            value={filter}
            options={options}
            onChange={selectChangeHandler}
            placeholder="دسته بندی..."
          />
        </fieldset>
        <ManageInputForm
          lbl={"مخلفات"}
          type="textarea"
          name="materials"
          value={formValue.materials}
          onChange={changeHandler}
        />
        <ManageInputForm
          lbl={"توضیحات"}
          type="textarea"
          name="information"
          value={formValue.information}
          onChange={changeHandler}
        />
        <ManageInputForm
          lbl={"عکس غذا"}
          type="file"
          name="img"
          accept=".jpg, .jpeg, .png"
          onChange={changeHandler}
        />

        <button
          className={`py-2 mt-14 w-full gradient Casablanca text-xl rounded-md text-white`}
          type="submit"
        >
          ثبت
        </button>
      </form>
    );
  }

  return returnValue;
};
