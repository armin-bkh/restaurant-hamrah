import Displayer from '../Displayer/Displayer';
import { useProductId } from '../../Container/ProductsProvider';

const DisplyerContainer = () =>{
    const { productId } = useProductId();
    return (
        <Displayer productId={productId} />
    )
}

export default DisplyerContainer;