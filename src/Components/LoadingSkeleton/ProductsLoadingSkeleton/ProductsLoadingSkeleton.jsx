import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./ProductsLoadingSkeleton.module.scss";

const ProductsLoadingSkeleton = () => {
  return (
    <article
      className={`flex-shrink-0 flex-grow-0 ${styles.skeletonContainer}`}
    >
    <SkeletonTheme color={"#212121"} highlightColor={"#363636"}> 
        <div className={`${styles.skeletonImage}`}>
          <Skeleton
            style={{ borderRadius: "50%" }}
            width={`100%`}
            height={"100%"}
          />
        </div>
      <h2>
          <Skeleton width={`100%`} height={25} />
      </h2>
        <div className={`flex justify-between`}>
          <h4 className={`flex-grow ml-2`}>
            <Skeleton width={`100%`} height={20} />
          </h4>
          <span className={`w-4`}>
            <Skeleton width={`100%`} height={20} />
          </span>
        </div>
        </SkeletonTheme>
    </article>
  );
};

export default ProductsLoadingSkeleton;
