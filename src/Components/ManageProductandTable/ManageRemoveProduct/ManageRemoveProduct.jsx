import { useEffect, useState } from "react";
import { getAllProducts } from "../../../Services/getAllProducts";
import { deleteProduct } from "../../../Services/deleteProduct";
import { getFoodFilters } from "../../../Services/getFoodFilters";
import FoodLoadingSkeleton from "../../LoadingSkeleton/FoodLoadingSkeleton/FoodLoadingSkeleton";
import { useToasts } from "react-toast-notifications";
import SelectBox from "../../Common/SelectBox/SelectBox";
import SearchBox from "../../Common/SearchBox/SearchBox";
import ManageProductItem from "../ManageProductItem/ManageProductItem";
import SelectBoxLoadingSkeleton from "../../LoadingSkeleton/SelectBoxLoadingSkeleton/SelectBoxLoadingSkeleton";

const ManageRemoveProduct = () => {
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
        const filtersL = await getFoodFilters();
        setProducts(data);
        setFilters(filtersL.data);
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // if (products) {
    //   if (filter.value !== "همه") {
    //     const filteredProducts = products.filter(
    //       (pr) => pr.filter === filter.value
    //     );
    //     const searchedProducts = filteredProducts.filter((pr) =>
    //       pr.title.toLowerCase().includes(search.toLowerCase())
    //     );
    //     const newList = searchedProducts ? searchedProducts : filteredProducts;
    //     setProductList(newList);
    //     if(!newList.length) setError(true)
    //     else setError(false)
    //   } else {
    //     const searchedProducts = products.filter((pr) =>
    //       pr.title.toLowerCase().includes(search.toLowerCase())
    //     );
    //     const newList = searchedProducts ? searchedProducts : products;
    //     setProductList(newList);
    //     if(!newList.length) setError(true)
    //     else setError(false)
    //   }
    // }
    if (products) {
      if (search) searchProductsHandler(search);
      else filterProductsHandler(filter);
    }
  }, [products]);

  const filterProductsHandler = (selectedOption) => {
    setSearch("");
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
    const filteredProducts = products.filter(
      (pr) => pr.filter === filter.value
    );
    const searchedProducts = filteredProducts.filter((pr) =>
      pr.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearch(value);
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

  const removeProductHandler = async (id) => {
    try {
      await setProducts(null);
      await setProductList(null);
      await deleteProduct(id);
      const { data } = await getAllProducts();
      setProducts(data);
      addToast("حذف شد", { appearance: "success" });
    } catch (err) {
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
    returnValue = productList.map((pr) => (
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
        className={`flex flex-col md:flex-row md:items-center md:justify-between pb-4`}
      >
        {filters ? (
          <>
            <SearchBox value={search} onSearch={searchProductsHandler} />
            <SelectBox
              onChange={filterProductsHandler}
              options={filters}
              value={filter}
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
    </form>
  );
};

export default ManageRemoveProduct;
