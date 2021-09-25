import styles from "./EmployeeMemberLoadingSkeleton.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const EmployeeMemberLoadingSkeleton = () => {
  return (
    <SkeletonTheme color={"#a8a7a7"} highlightColor={"#dbdbdb"}>
      <div
        className={`max-w-md md:max-w-xl boxShadow p-6 rounded-md ${styles.employeeProfile} flex flex-col`}
      >
        <div>
          <Skeleton width={30} height={30} />
        </div>
        <div className={`flex items-center justify-center mb-2`}>
          <div className={`relative rounded-full`}>
            <div className={`w-52 h-52 md:w-80 md:h-80 rounded-full ${styles.editIcon}`}>
              <Skeleton
                style={{ borderRadius: `50%` }}
                width={`100%`}
                height={`100%`}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={`mb-5 flex items-center justify-between`}>
            <div
              className={`ml-10`}
            >
              <Skeleton width={120} height={40} />
            </div>
            <div >
              <Skeleton width={70} height={20} />
            </div>
          </div>
          <div>
            <Skeleton width={100} height={25} />َ
          </div>
        </div>
        <div
          className={`rounded-md block w-full mt-auto`}
        >
                      <Skeleton width={`100%`} height={45} />َ
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default EmployeeMemberLoadingSkeleton;
