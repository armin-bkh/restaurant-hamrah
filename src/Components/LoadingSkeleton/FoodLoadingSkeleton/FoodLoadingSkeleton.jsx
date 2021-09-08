import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FoodLoadingSkeleton = () => {
  return (
    <SkeletonTheme color={"#a8a7a7"} highlightColor={"#dbdbdb"}>
      <div className={`flex justify-between items-center px-4 py-3 bgLight boxShadow my-4 rounded-md`}>
        <div className={`w-20 h-20`}>
          <Skeleton style={{borderRadius: `50%`}} width={`w-100%`} height={`100%`}/>
        </div>
        <span>
          <Skeleton width={100} height={20} />
        </span>
        <span>
          <Skeleton width={70} height={20} />
        </span>
        <span>
          <Skeleton style={{borderRadius: `50%`}} width={25} height={25} />
        </span>
      </div>
    </SkeletonTheme>
  );
};

export default FoodLoadingSkeleton;
