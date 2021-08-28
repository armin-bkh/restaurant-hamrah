import Displayer from '../Displayer/Displayer';
import { useAlert, useProductId } from '../../Container/ProductsProvider';

const DisplyerContainer = () =>{
    const { productId } = useProductId();
    const { alert } = useAlert();
    return (
        <Displayer alert={alert} productId={productId} />
    )
}

export default DisplyerContainer;