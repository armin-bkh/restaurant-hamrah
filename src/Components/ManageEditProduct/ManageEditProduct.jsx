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
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState({ label: "همه", value: "همه" });
  const [filters, setFilters] = useState(null);
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
    const getFilters = async () =>{
      try{
        const { data } = await getAllFilters();
        setFilters(data);
      }catch(err){
        setError(true);
      }
    }
    getFilters();
  }, []);

  const editProductHandler = (id) => {
    setProductId(id);
  };

  const filterProductsHandler = async (selectedOption) => {
    setSearch('');
    setFilter(selectedOption);
    await setProducts(null);
    const { data } = await getAllProducts();
    const filteredProducts = data.filter(
      (pr) => pr.filter === selectedOption.value
    );
    if (selectedOption.value === "همه") {
      setProducts(data);
      if(!data.length) setError(true)
      else setError(false)
      return;
    }
    setProducts(filteredProducts);
    if(!filteredProducts.length) setError(true)
    else setError(false)
  };

  const searchProductsHandler = async (value) => {
    await setProducts(null);
    const { data } = await getAllProducts();
    setSearch(value);
    const filteredProducts = data.filter((pr) => pr.filter === filter.value);
    const searchedProducts = filteredProducts.filter((pr) => pr.title.toLowerCase().includes(value.toLowerCase()));
    if (value.length > 0) {
      if (filter.value === "همه") {
        const searchedProductsInAll = data.filter((pr) => pr.title.toLowerCase().includes(value.toLowerCase()))
        setProducts(searchedProductsInAll);
        if(!searchedProductsInAll.length) setError(true)
        else setError(false);
        return;
      }
      setProducts(searchedProducts);
      if(!searchedProducts.length) setError(true)
      else setError(false)
    } else {
      if (filter.value === "همه") {
        setProducts(data);
        if(!data.length) setError(true)
        else setError(false)
        return;
      } else {
        setProducts(filteredProducts);
        if(!filteredProducts.length) setError(true)
        else setError(false)
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
            searchList={search}
            productId={productId}
            setProducts={setProducts}
            setProductId={setProductId}
            err={setError}
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
        <SearchBox value={search} onSearch={searchProductsHandler} />
        {
          filters ? <SelectBox
          value={filter}
          options={filters}
          onChange={filterProductsHandler}
          placeholder="دسته بندی..."
        /> : <SelectBoxLoadingSkeleton />}
      </header>
      <ul>{returnValue}</ul>
    </section>
  );
};

export default ManageEditProduct;

const EditProduct = ({ productId, setProducts, setProductId, filterList, searchList, err }) => {
  const [formValue, setFormValue] = useState(null);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("");
  const [filters, setFilters] = useState(null);
  const { addToast } = useToasts();

  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        try {
          const  product = await getOneProduct(productId);
          const  filterL  = await getAllFilters();
          setFormValue(product.data);
          setFilters(filterL.data);
          setFilter(filterL.data.filter(op => op.value === product.data.filter));
        } catch (err) {
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

    for (const key in formValue) {
      formData.append(key, formValue[key]);
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
        await setProducts(null)
        await putProduct(productId, { ...formValue, id: productId });
        const { data } = await getAllProducts();
        const filteredProducts = data.filter((pr) => pr.filter === filterList.value);
        const searchedProducts = filteredProducts.filter((pr) => pr.title.toLowerCase().includes(searchList.toLowerCase()));
        if (filterList.value === "همه") {
          const searchedListInAll = data.filter((pr) => pr.title.toLowerCase().includes(searchList.toLowerCase()))
          const newList = searchedListInAll.length ? searchedListInAll : filteredProducts;
          setProducts(newList);
          if(!newList) setError(true)
          else setError(false)
        } else {
          setProducts(searchedProducts);
          if(!searchedProducts.length) err(true)
          else err(false)
        }
        addToast("تغییرات اعمال شد", { appearance: "success" });
        setProductId('');
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
              options={filters.filter(op => op.value !== "همه")}
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
