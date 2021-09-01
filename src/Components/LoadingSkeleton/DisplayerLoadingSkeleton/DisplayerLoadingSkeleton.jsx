import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./DisplayerLoadingSkeleton.module.scss";

const DisplayerLoadingSkeleton = () => {
  return (
    <SkeletonTheme color={"#212121"} highlightColor={"#363636"}>
      <div className={` ${styles.skeletonDisplayerImg}`}>
        <Skeleton width={`100%`} height={`100%`} style={{borderRadius: '50%'}} />
      </div>
      <article className={`mt-5 ${styles.skeletonDisplyerInformation}`}>
        <h1 className={`text-center`}>
          <Skeleton width={`40%`} height={35} />
        </h1>
        <h3 className={`text-center mb-8`}>
          <Skeleton width={`30%`} height={30} />
        </h3>
        <h3>
          <Skeleton width={`25%`} height={25} />
        </h3>
        <p className={`mb-8`}>
          <Skeleton width={`100%`} height={65} />
        </p>
        
        <div className={`text-center mb-3`}>
          <Skeleton width={`30%`} height={25} />
        </div>

        <div>
          <Skeleton width={`100%`} height={30} />
        </div>
      </article>
    </SkeletonTheme>
  );
};

export default DisplayerLoadingSkeleton;
