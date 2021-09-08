import { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { getAllProducts } from "../../Services/getAllProducts";
import { getOneProduct } from "../../Services/getOneProduct";
import { putProduct } from "../../Services/putProduct";
import EditFoodLoadingSkeleton from "../LoadingSkeleton/EditFoodLoadingSkeleton/EditFoodLoadingSkeleton";
import FoodLoadingSkeleton from "../LoadingSkeleton/FoodLoadingSkeleton/FoodLoadingSkeleton";
import styles from "./ManageEditProduct.module.scss";

const ManageEditProduct = () => {
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);

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

  let returnValue = Array(15).fill().map((item, index) => <FoodLoadingSkeleton key={index} /> );

  if (error) {
    returnValue = <h1 className={`text-blue-400 text-center py-40 text-lg lg:text-3xl FPArsoo`}>فهرست غذا خالی است</h1>;
  }
  if (products && !error) {
    returnValue = products.map((pr) => {
        if(pr.id === productId) {
            return <EditProduct productId={productId} setProducts={setProducts} setProductId={setProductId} />
        } else return <ProductItem key={pr.id} inf={pr} setProductId={setProductId} />
    });
  }

  return (
    <section className={`text-black`}>
      <ul className={`boxShadowInner rounded-md py-1 px-4`}>
        {returnValue}
      </ul>
    </section>
  );
};

export default ManageEditProduct;

const ProductItem = ({ inf, setProductId }) => {
  return (
    <li
      className={`flex justify-between items-center my-4 px-4 py-3 text-sm md:text-lg rounded-md boxShadow`}
    >
      <div className={`w-20 h-20`}>
        <img className={`w-full h-full`} src={inf.img} alt={inf.title} />
      </div>
      <span>{inf.title}</span>
      <span>{inf.price}</span>
      <button
        className={`gradient-bottom px-2 py-2 text-white rounded-full`}
        onClick={() => setProductId(inf.id)}
      >
        <BiPencil />
      </button>
    </li>
  );
};

const EditProduct = ({productId, setProducts, setProductId}) => {
  const [formValue, setFormValue] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        try {
          const { data } = await getOneProduct(productId);
          setFormValue(data);
        } catch (error) {
          setError(true);
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

  const SubmitHandler = async (e) =>{
      e.preventDefault();
      try {
          await putProduct(productId,{...formValue, id: productId})
          const { data } = await getAllProducts();
          setProducts(data);
          setProductId('');
      } catch (error) {
          setError(true);
      }
      
  }

  let returnValue;

  if (productId) {
    returnValue = <EditFoodLoadingSkeleton />;
  }

  if(formValue && !error) {
    returnValue = (
    <form onSubmit={SubmitHandler} className={`flex text-black flex-col w-full my-3 items-center rounded-md px-4 py-3 boxShadow`}>
      <div className={`mb-5 flex-col justify-center items-center w-full`}>
        <label className={`ml-3 text-sm md:text-lg`}>نام غذا: </label>
        <input className={`bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md outline-none boxShadow`} value={formValue.title} name="title" onChange={changeHandler} />
      </div>
      <div className={`mb-5 flex-col justify-center items-center w-full`}>
        <label className={`ml-3 text-sm md:text-lg`}>قیمت:</label>
        <input className={`bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md outline-none boxShadow`} value={formValue.price} name="price" onChange={changeHandler} />
      </div>
      <div className={`mb-5 flex-col justify-center items-center w-full`}>
      <label className={`ml-3 text-sm md:text-lg`}>دسته بندی:</label>
        <input className={`bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md outline-none boxShadow`} value={formValue.filter} name="filter" onChange={changeHandler} />
      </div>
      <div className={`mb-5 flex-col justify-center w-full`}>
      <label className={`ml-3 text-sm md:text-lg`}>مخلفات:</label>
        <textarea
        className={`bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md h-52 outline-none boxShadow`}
          value={formValue.materials} name="materials"
          onChange={changeHandler}
        ></textarea>
      </div>
      <div className={`mb-5 flex-col w-full justify-start`}>
      <label className={`ml-3 text-sm md:text-lg`}>
      توضیحات: 
      </label>
        <textarea
        className={`bg-transparent px-3 mt-2 text-sm w-full py-2 rounded-md h-52 outline-none boxShadow`}
          value={formValue.information} name="information"
          onChange={changeHandler}
        ></textarea>
      </div>
      <div className={`mb-5 w-full flex-col flex justify-start`}>
        <label className={`ml-3 text-sm md:text-lg`}>عکس غذا: </label>
        <input className={`cursor-pointer mt-2 text-sm`} type="file" name="img" accept=".jpg, .jpeg, .png" onChange={changeHandler} />
      </div>

      <button className={`py-2 mt-14 w-full gradient FPArsoo text-xl rounded-md text-white`} type="submit">ثبت</button>
    </form>
    );
  }

  return returnValue;
};
