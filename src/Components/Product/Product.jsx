import { useReservatioActions } from "../../Container/ReservationProvider";
import { BiPin } from "react-icons/bi";
import styles from "./Products.module.scss";

const Product = ({ inf, onPin }) => {
  const { toShowHandler } = useReservatioActions();

  const clickHandler = () => {
    toShowHandler(inf.id);
    console.log(inf.off);
  };

  const likeHandler = () => {
    onPin(inf.id);
  };

  return (
    <figure
      className={`flex-grow-0 flex-shrink-0 bgLight boxShadow relative ${styles.productContainer}`}
    >
      {inf.off && (
        <span
          className={`text-xs md:text-sm absolute -top-2 -left-3 font-bold transform -rotate-45
           text-red-600 border border-red-600 rounded-full flex items-center
            justify-center w-6 h-6  md:w-8 md:h-8`}
        >
          {inf.off}
        </span>
      )}
      <img
        loading="lazy"
        onClick={clickHandler}
        className={`${styles.productImage}`}
        src={inf.img}
        alt={inf.title}
      />

      <figcaption className={styles.productCaption}>
        <h1
          className={`text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-3 Casablanca`}
        >
          {inf.title}
        </h1>
        <div className="flex justify-between items-center">
          <div
            className={`text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl Casablanca`}
          >
            {inf.off ? (
              <div className={`relative`}>
                <span
                  className={`absolute -top-4 right-4 text-red-600 line-through transform -rotate-12`}
                >
                  {inf.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                <span>
                  {(inf.price - (inf.off * inf.price) / 100)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
            ) : (
              <span>
                {`${inf.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان`}
              </span>
            )}
          </div>
          <span>
            <BiPin
              className={`${
                inf.pin ? "text-blue-400" : "text-black"
              } cursor-pointer text-xl transition-colors`}
              onClick={likeHandler}
            />
          </span>
        </div>
      </figcaption>
    </figure>
  );
};

export default Product;
