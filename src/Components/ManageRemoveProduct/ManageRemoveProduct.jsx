import { useEffect, useState } from "react";
import { getAllProducts } from '../../Services/getAllProducts';
import { BiTrash } from 'react-icons/bi';
import { deleteProduct } from "../../Services/deleteProduct";
import { numberWithCommas } from '../utils/CommaNumber';

const ManageRemoveProduct = () => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(false);

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

    let returnValue = <h1>در حال پردازش...</h1>

    if(error){
        returnValue = <h1>دیتا دریافت نشد</h1>
    }

    if(products && !error){
        returnValue = (
            products.map(pr => <DelProduct key={pr.id} inf={pr} setProducts={setProducts} />)
        )
    }

    return ( 
        <form className={`text-white borderRoundFull rounded-md`}>
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


    const price = numberWithCommas(inf.price);

    const deleteHandler = async (e) =>{
        e.preventDefault();
        try{
            await deleteProduct(inf.id);
            const { data } = await getAllProducts();
            setProducts(data);
        }
        catch(err){
            setError(true)
        }
    }
    return (
        <li className={`flex text-sm md:text-lg items-center justify-between px-3 py-2 borderBottom`}>
        <div className={`w-20 h-20`}>
            <img className={`w-full h-full`} src={inf.img} alt={inf.title} />
        </div>
        <span>
            {inf.title}
        </span>
        
        <span>
            {price()}
        </span>
            <button className={`rounded-full bg-gradient-to-b from-gray-700 to-gray-900 px-2 py-2`} type="submit" onClick={deleteHandler}>
                <BiTrash />
            </button>
        </li>
    )
}