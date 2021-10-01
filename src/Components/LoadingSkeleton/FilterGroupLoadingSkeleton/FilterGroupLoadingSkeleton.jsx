import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FilterGroupLoadingSkeleton = () => {
  return (
    <SkeletonTheme color={"#a8a7a7"} highlightColor={"#dbdbdb"}>
      <div style={{height: '4.5rem'}} className={`flex items-center rounded-md justify-between p-5 my-4 boxShadow`}>
        <div className={`flex items-center`}>
          <div className={`ml-3`}>
            <Skeleton width={20} height={20} />
          </div>
          <div className={`w-28 md:w-40`}>
            <Skeleton width={`100%`} height={35} />
          </div>
        </div>
        <div>
          <Skeleton width={20} height={20} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default FilterGroupLoadingSkeleton;
