import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { getAllFilters } from "../../Services/getAllFilters";
import { getAllProducts } from "../../Services/getAllProducts";
import { getOneProduct } from "../../Services/getOneProduct";
import { putProduct } from "../../Services/putProduct";
import ManageInputForm from "../Common/ManageInputForm/ManageInputForm";
import SearchBox from "../Common/SearchBox/SearchBox";
import SelectBox from "../Common/SelectBox/SelectBox";
import EditFoodLoadingSkeleton from "../LoadingSkeleton/EditFoodLoadingSkeleton/EditFoodLoadingSkeleton";
import FoodLoadingSkeleton from "../LoadingSkeleton/FoodLoadingSkeleton/FoodLoadingSkeleton";
import SelectBoxLoadingSkeleton from "../LoadingSkeleton/SelectBoxLoadingSkeleton/SelectBoxLoadingSkeleton";
import ManageAddFilter from "../ManageAddFilter/ManageAddFilter";
import ManageProductItem from "../ManageProductItem/ManageProductItem";

const ManageEditProduct = () => {
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState(null);
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState({ label: "همه", value: "همه" });
  const [filters, setFilters] = useState(null);
  const [search, setSearch] = useState("");
  const { addToast } = useToasts();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllProducts();
        const filterL = await getAllFilters();
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
      // if (filter.value !== "همه") {
      //   const filteredProducts = products.filter(
      //     (pr) => pr.filter === filter.value
      //   );
      //   const searchedProducts = filteredProducts.filter((pr) =>
      //     pr.title.toLowerCase().includes(search.toLowerCase())
      //   );
      //   const newList = searchedProducts ? searchedProducts : filteredProducts;
      //   setProductList(newList);
      //   if (!newList.length) setError(true);
      //   else setError(false);
      // } else {
      //   const searchedProducts = products.filter((pr) =>
      //     pr.title.toLowerCase().includes(search.toLowerCase())
      //   );
      //   const newList = searchedProducts ? searchedProducts : products;
      //   setProductList(newList);
      //   if (!newList.length) setError(true);
      //   else setError(false);
      // }
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
    setFilter(selectedOption);
    const filteredProducts = products.filter(
      (pr) => pr.filter === selectedOption.value
    );
    if (selectedOption.value === "همه") {
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
    const filteredProducts = products.filter(
      (pr) => pr.filter === filter.value
    );
    const searchedProducts = filteredProducts.filter((pr) =>
      pr.title.toLowerCase().includes(value.toLowerCase())
    );
    if (value.length > 0) {
      if (filter.value === "همه") {
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
      if (filter.value === "همه") {
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
      await putProduct(productId, { ...formValue, id: productId });
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

const EditProduct = ({ onSubmit, productId }) => {
  const [formValue, setFormValue] = useState(null);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("");
  const [filters, setFilters] = useState(null);
  const { addToast } = useToasts();

  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        try {
          const product = await getOneProduct(productId);
          const filterL = await getAllFilters();
          setFormValue(product.data);
          setFilters(filterL.data);
          setFilter(
            filterL.data.filter((op) => op.value === product.data.filter)
          );
        } catch (err) {
          setError(true);
          addToast("مجددا تلاش کنید", { appearance: "error" });
        }
      };
      getProduct();
    }
  }, []);

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

  const SubmitHandler = (e) => {
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
      onSubmit(formValue);
    } else addToast("تمامیه اطلاعات ضروری است", { appearance: "error" });
  };

  let returnValue;

  if (productId) {
    returnValue = <EditFoodLoadingSkeleton />;
  }

  if (formValue && !error && filters) {
    returnValue = (
      <li className={`boxShadow`}>
        <ManageAddFilter setFilters={setFilters} />
        <form
          onSubmit={SubmitHandler}
          className={`flex text-black flex-col w-full my-3 items-center rounded-md px-4 py-3`}
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
              options={filters.filter((op) => op.value !== "همه")}
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
      </li>
    );
  }

  return returnValue;
};
