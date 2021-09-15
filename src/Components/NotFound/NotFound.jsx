import { useEffect } from 'react';
import NotFoundSvg from "../../Assets/SVG/oops-404-error-with-a-broken-robot-animate.svg";
import { Link } from "react-router-dom";

const NotFound = ({ history }) => {

    useEffect(()=>{
        document.title = "404!"
    }, [])

  return (
    <section className={`p-10 flex flex-col items-center`}>
      <h1
        className={`color-gradient text-xl md:text-3xl lg:text-5xl xl:text-7xl Casablanca`}
      >
        صفحه مورد نظر پیدا نشد
      </h1>
      <img
        className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-1xl 2xl:max-w-4xl imgShadow`}
        src={NotFoundSvg}
        alt="NOT FOUND"
      />

      <div className={`flex flex-col md:flex-row justify-between items-center`}>
        <Link
        to="/"
          className={`px-10 py-2 gradient Casablanca text-white rounded-md text-sm lg:text-lg`}
        >
          صفحه اصلی
        </Link>
        <button
            type="button"
          onClick={() => history.goBack()}
          className={`px-10 py-2 gradient Casablanca text-white rounded-md text-sm lg:text-lg mt-5 md:mt-0 md:mr-5`}
        >
          بازگشت
        </button>
      </div>
    </section>
  );
};

export default NotFound;
