import { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/getAllProducts";
import { deleteProduct } from "../../Services/deleteProduct";
import { getAllFilters } from "../../Services/getAllFilters";
import FoodLoadingSkeleton from "../LoadingSkeleton/FoodLoadingSkeleton/FoodLoadingSkeleton";
import { useToasts } from "react-toast-notifications";
import SelectBox from "../Common/SelectBox/SelectBox";
import SearchBox from "../Common/SearchBox/SearchBox";
import ManageProductItem from "../ManageProductItem/ManageProductItem";
import SelectBoxLoadingSkeleton from "../LoadingSkeleton/SelectBoxLoadingSkeleton/SelectBoxLoadingSkeleton";

const ManageRemoveProduct = () => {
  const [products, setProducts] = useState('');
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState({ label: "همه", value: "همه" });
  const [filters, setFilters] = useState(null);
  const [search, setSearch] = useState("");
  const { addToast } = useToasts();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAllProducts();
        const filtersL = await getAllFilters();
        setProducts(data);
        setFilters(filtersL.data);
      } catch (err) {
        setError(true);
      }
    };
    getProducts();
  }, []);

  const filterProductsHandler = async (selectedOption) => {
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
    const { data } = await getAllProducts();
    const filteredProducts = data.filter((pr) => pr.filter === filter.value);
    const searchedProducts = filteredProducts.filter((pr) => pr.title.toLowerCase().includes(value.toLowerCase()));
    setSearch(value);
    if (value.length > 0) {
      if (filter.value === "همه") {
        const searchedProductsInAll = data.filter((pr) => pr.title.toLowerCase().includes(value.toLowerCase()))
        setProducts(searchedProductsInAll);
        if(!searchedProductsInAll.length) setError(true)
        else setError(false)
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

  const removeProductHandler = async (id) => {
    try {
      await deleteProduct(id);
      const { data } = await getAllProducts();
      if (filter.value === "همه") {
        setProducts(data);
      } else setProducts(data.filter((pr) => pr.filter === filter.value));
      addToast("حذف شد", { appearance: "success" });
    } catch (err) {
      setError(true);
      addToast("مجددا تلاش کنید", { appearance: "error" });
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
    returnValue = products.map((pr) => (
      <ManageProductItem
        key={pr.id}
        inf={pr}
        onSubmit={removeProductHandler}
        type="remove"
      />
    ));
  }

  return (
    <form className={`text-black boxShadowInner rounded-md pt-4 pb-1 px-4`}>
      <header
        className={`flex flex-col md:flex-row md:items-center md:justify-between`}
      >
        <SearchBox onSearch={searchProductsHandler} />
        {filters ? (
          <SelectBox
            onChange={filterProductsHandler}
            options={filters}
            value={filter}
            placeholder="دسته بندی..."
          />
        ) : <SelectBoxLoadingSkeleton />}
      </header>
      <ul>{returnValue}</ul>
    </form>
  );
};

export default ManageRemoveProduct;