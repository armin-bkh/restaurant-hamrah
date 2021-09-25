import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const EditEmployeeLoadingSkelton = () => {
  return (
    <SkeletonTheme color={"#a8a7a7"} highlightColor={"#dbdbdb"}>
      <div className={`p-5 boxShadow flex flex-col rounded-md w-full`}>
        <div className={`mb-10`}>
          <Skeleton width={120} height={40} />
        </div>
        <div className={`mb-5`}>
          <div>
            <Skeleton width={70} height={25} />
          </div>
          <div className={`w-full mt-3 boxShadow rounded-md`}>
            <Skeleton width={`100%`} height={30} />
          </div>
        </div>
        <div className={`mb-5`}>
          <div>
            <Skeleton width={70} height={25} />
          </div>
          <div className={`w-full mt-3 boxShadow rounded-md`}>
            <Skeleton width={`100%`} height={30} />
          </div>
        </div>
        <div className={`mb-5`}>
          <div>
            <Skeleton width={70} height={25} />
          </div>
          <div className={`w-full mt-3 boxShadow rounded-md`}>
            <Skeleton width={`100%`} height={30} />
          </div>
        </div>
        <div className={`mb-5`}>
          <div>
            <Skeleton width={70} height={25} />
          </div>
          <div className={`w-full mt-3 boxShadow rounded-md`}>
            <Skeleton width={`100%`} height={30} />
          </div>
        </div>
        <div className={`w-full`}>
          <Skeleton width={`100%`} height={45} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default EditEmployeeLoadingSkelton;
