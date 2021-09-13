import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const TableLoadingSkeleton = () => {
  return (
    <SkeletonTheme color={"#a8a7a7"} highlightColor={"#dbdbdb"}>
      <article className={`h-96 flex flex-col justify-center p-5 bgLight boxShadow rounded-md`}>
        <div className={`h-24 w-24 mx-auto mb-9`}>
          <Skeleton style={{borderRadius: '50%'}} width={`100%`} height={`100%`} />
        </div>
        <div>
          <Skeleton count={3} width={`100%`} height={25} />
        </div>
        <div className={`mt-14`}>
          <Skeleton width={`100%`} height={30} />
        </div>
      </article>
    </SkeletonTheme>
  );
};

export default TableLoadingSkeleton;
