import { useProductId } from "../../Container/ReservationProvider";
import Displayer from "../Displayer/Displayer";

const DisplyerContainer = () => {
  const productId = useProductId();
  return <Displayer productId={productId} />;
};

export default DisplyerContainer;
