import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { productsData } from "../../db/products";
import { ProductsContext, ProductsDispatcherContext } from "../Context/ProductsContext";
import { DispalyerContext } from '../Context/DispalyerContext';

const ProductsProvider = ({ children }) => {
    let initialState = productsData;
    const reducer = (state, action) =>{
        switch(action.type){
            case 'getProducts': {
                // let updatedProducts = null;
                // axios
                // .get()
                // .then(res => updatedProducts = res.data)
                // .catch(err => console.log(err))
                const updatedProducts = productsData;
                return updatedProducts;
            }
            case 'toShow': {
                const product = action.product;
                setToShow(product);
                return state;
            }
            case 'like': {
                const selectedProduct = state.findIndex(el => el.id === action.product.id);
                const cloneProducts = [...state];
                const selectedItem = {...state[selectedProduct]};
                selectedItem.like = !selectedItem.like;
                cloneProducts[selectedProduct] = selectedItem;
                return cloneProducts;
            }
            default:
                return state;
        }
    }
    const [ products, dispatch ] = useReducer(reducer, initialState);
    const [toShow, setToShow] = useState({});

    useEffect(()=>{
        dispatch({type: 'getProducts'})
    }, [])
    return (
        <ProductsContext.Provider value={products}>
            <ProductsDispatcherContext.Provider value={dispatch}>
            <DispalyerContext.Provider value={toShow}>
                {children}
                </DispalyerContext.Provider>
            </DispalyerContext.Provider>
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsAction = () => useContext(ProductsDispatcherContext);
export const useDispaly = () => useContext(DispalyerContext);