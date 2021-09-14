import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SelectBoxLoadingSkeleton = () => {
  return (
    <SkeletonTheme color={"#a8a7a7"} highlightColor={"#dbdbdb"}>
      <div
        className={`w-full h-9 md:w-32 mb-5 md:mb-0 boxShadow`}
      >
          <Skeleton
            width={`100%`}
            height={`100%`}
          />
      </div>
    </SkeletonTheme>
  );
};

export default SelectBoxLoadingSkeleton;