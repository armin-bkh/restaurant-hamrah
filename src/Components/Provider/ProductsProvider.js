import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import { productsData } from "../../db/products";
import { ProductsContext, ProductsDispatcherContext } from "../Context/ProductsContext";

const ProductsProvider = ({ children }) => {
    let initialState = productsData;
    const reducer = (state, action) =>{
        switch(action.type){
            case 'getProducts':
                // let updatedProducts = null;
                // axios
                // .get()
                // .then(res => updatedProducts = res.data)
                // .catch(err => console.log(err))
                const updatedProducts = productsData;
                return updatedProducts;
            default:
                return state;
        }
    }
    const [ products, dispatch ] = useReducer(reducer, initialState);
    useEffect(()=>{
        dispatch({type: 'getProducts'})
    }, [])
    console.log(products);
    return (
        <ProductsContext.Provider value={products}>
            <ProductsDispatcherContext.Provider value={dispatch}>
                {children}
            </ProductsDispatcherContext.Provider>
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsAction = () => useContext(ProductsDispatcherContext);