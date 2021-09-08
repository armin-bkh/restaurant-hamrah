import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const EditFoodLoadingSkeleton = () => {
  return (
    <SkeletonTheme color={"#a8a7a7"} highlightColor={"#dbdbdb"}>
      <div className={`w-full flex my-3 flex-col p-4`}>
        <div className={`mb-5`}>
          <span>
            <Skeleton width={100} height={30} />
          </span>
          <div className={`mt-2`}>
            <Skeleton width={`100%`} height={30} />
          </div>
        </div>
        <div className={`mb-5`}>
          <span>
            <Skeleton width={100} height={30} />
          </span>
          <div className={`mt-2`}>
            <Skeleton width={`100%`} height={30} />
          </div>
        </div>
        <div className={`mb-5`}>
          <span>
            <Skeleton width={100} height={30} />
          </span>
          <div className={`mt-2`}>
            <Skeleton width={`100%`} height={30} />
          </div>
        </div>
        <div className={`mb-5`}>
          <span>
            <Skeleton width={100} height={30} />
          </span>
          <div className={`mt-2`}>
            <Skeleton width={`100%`} height={150} />
          </div>
        </div>
        <div className={`mb-5`}>
          <span>
            <Skeleton width={100} height={30} />
          </span>
          <div className={`mt-2`}>
            <Skeleton width={`100%`} height={150} />
          </div>
        </div>
        <div className={`mb-5`}>
          <span>
            <Skeleton width={100} height={30} />
          </span>
          <div className={`mt-2`}>
            <Skeleton width={180} height={30} />
          </div>
        </div>

        <div className={`mt-14`}>
          <Skeleton width={`100%`} height={43} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default EditFoodLoadingSkeleton;
