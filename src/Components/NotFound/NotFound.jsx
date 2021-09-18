import { useEffect } from 'react';
import NotFoundSvg from "../../Assets/SVG/oops-404-error-with-a-broken-robot-animate.svg";
import { Link } from "react-router-dom";

const NotFound = () => {

    useEffect(()=>{
        document.title = "404!";
    }, [])

  return (
    <section className={`p-10 flex flex-col items-center`}>
      <h1
        className={`color-gradient text-xl md:text-3xl lg:text-5xl xl:text-7xl Casablanca`}
      >
        صفحه مورد نظر پیدا نشد
      </h1>
      <img
        className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-1xl 2xl:max-w-2xl imgShadow`}
        src={NotFoundSvg}
        alt="NOT FOUND"
      />

        <Link
        to="/"
          className={`px-10 py-2 mt-10 gradient Casablanca text-white rounded-md text-sm lg:text-lg`}
        >
          صفحه اصلی
        </Link>
    </section>
  );
};

export default NotFound;
