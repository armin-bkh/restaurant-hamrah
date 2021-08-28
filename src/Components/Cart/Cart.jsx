import { useAlert } from "../../Container/ProductsProvider";
import CartList from "./CartList/CartList";

const Cart = () => {
    const { alert } = useAlert();
    return ( 
        <CartList alert={alert} />
     );
}
 
export default Cart;