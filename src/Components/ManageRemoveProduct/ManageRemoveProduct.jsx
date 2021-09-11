import { useEffect, useState } from "react";
import { getAllProducts } from '../../Services/getAllProducts';
import { BiTrash } from 'react-icons/bi';
import { deleteProduct } from "../../Services/deleteProduct";
import { numberWithCommas } from '../utils/CommaNumber';
import FoodLoadingSkeleton from "../LoadingSkeleton/FoodLoadingSkeleton/FoodLoadingSkeleton";
import { useToasts } from 'react-toast-notifications';
import SelectBox from '../Common/SelectBox/SelectBox';

const options = [
    { label: "همه", value: "all" },
    { label: "کباب", value: "kebab" },
    { label: "خورشت", value: "khoresht" },
    { label: "پلو", value: "polo" },
    { label: "سالاد", value: "salad" },
];

const ManageRemoveProduct = () => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(false);
    const [filter, setFilter] = useState({ label: "همه" });

    useEffect(()=>{
        const getProducts = async () =>{
            try{
                const { data } = await getAllProducts();
                setProducts(data);
            }
            catch(err){
                setError(true);
            }
        }
        getProducts();
    }, [])

    const filterProductsHandler = async (selectedOption) =>{
        setFilter(selectedOption);
        await setProducts(null);
        const { data } = await getAllProducts();
        const filteredProducts = data.filter( pr => pr.filter === selectedOption.value);
        if(selectedOption.value === 'all'){
            setProducts(data);
            return;
        }
        setProducts(filteredProducts);
    }

    let returnValue = Array(15).fill().map((item, index) => <FoodLoadingSkeleton key={index} />)

    if(error){
        returnValue = <h1 className={`text-blue-400 text-center py-20 lg:p-32 text-lg lg:text-3xl FPArsoo`}>فهرست غذا خالی است</h1>
    }

    if(products && !error){
        returnValue = (
            products.map(pr => <DelProduct key={pr.id} inf={pr} setProducts={setProducts} />)
        )
    }

    return ( 
        <form className={`text-black boxShadowInner rounded-md pt-4 pb-1 px-4`}>
        <SelectBox onChange={filterProductsHandler} options={options} value={filter} placeholder="دسته بندی..." />
            <ul>
                {
                    returnValue
                }
            </ul>
        </form>
     );
}
 
export default ManageRemoveProduct;

const DelProduct = ({inf, setProducts}) =>{
    const [error, setError] = useState(false);
    const { addToast } = useToasts();

    const price = numberWithCommas(inf.price);

    const deleteHandler = async (e) =>{
        e.preventDefault();
        try{
            await deleteProduct(inf.id);
            const { data } = await getAllProducts();
            setProducts(data);
            addToast('حذف شد', {appearance: 'success',});
        }
        catch(err){
            setError(true);
            addToast('مجددا تلاش کنید', {appearance: 'error',});
        }
    }
    return (
        <li className={`flex text-sm md:text-lg rounded-md boxShadow items-center my-4 justify-between px-4 py-3`}>
        <div className={`w-20 h-20`}>
            <img className={`w-full h-full`} loading="lazy" src={inf.img} alt={inf.title} />
        </div>
        <span>
            {inf.title}
        </span>
        
        <span>
            {price()}
        </span>
            <button className={`rounded-full text-white gradient-bottom px-2 py-2`} type="submit" onClick={deleteHandler}>
                <BiTrash />
            </button>
        </li>
    )
}