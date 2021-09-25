import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const EmployeeLoadingSkeleton = () => {
  return (
    <SkeletonTheme color={"#a8a7a7"} highlightColor={"#dbdbdb"}>
      <div
        className={`flex items-center justify-between boxShadow px-5 py-3 my-4 rounded-md`}
      >
        <div className={`flex items-center justify-between w-1/4`}>
          <div className={`flex items-center justify-center ml-2`}>
          <div className={`w-9 h-9 ml-3`}>
            <Skeleton
              style={{ borderRadius: `50%` }}
              width={`100%`}
              height={`100%`}
            />
          </div>
          <div className={`flex flex-col`}>
            <span className={`w-12 md:w-18`}>
              <Skeleton width={`100%`} height={20} />
            </span>
            <span className={`w-16 md:w-20`}>
              <Skeleton width={`100%`} height={16} />
            </span>
          </div>
          </div>
        <span className={`w-20 md:w-9`}>
          <Skeleton width={`100%`} height={20} />
        </span>
        </div>
        <div className={`flex items-center justify-between`}>
          <span className={`w-7 h-7 md:w-8 md:h-8`}>
            <Skeleton style={{ borderRadius: `50%` }} width={`100%`} height={`100%`} />
          </span>
          <span className={`w-7 h-7 md:w-8 md:h-8 mr-2`}>
            <Skeleton style={{ borderRadius: `50%` }} width={`100%`} height={`100%`} />
          </span>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default EmployeeLoadingSkeleton;
