import { useProductsAction } from "../Provider/ProductsProvider";

const Product = ({ inf }) => {
    const dispatch = useProductsAction();
    const clickHandler = () =>{
        dispatch({type: 'toShow', product: inf})
    }
  return (
    <figure onClick={clickHandler}>
      <img src={inf.img} alt={inf.title} />
      <figcaption>
        <header>
          <h1>{inf.title}</h1>
          <span>{inf.price} تومان</span>
        </header>
        <p>{inf.detail}</p>
      </figcaption>
    </figure>
  );
};

export default Product;
