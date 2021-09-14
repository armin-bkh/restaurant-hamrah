import Home from "../../images/Data report-bro.png";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";

const HomeIntroduction = () => {
  return (
    <main>
      <section
        className={`min-h-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-5 gap-y-2 lg:grid-rows-3`}
      >
        <article
          className={`row-span-2 lg:row-span-3 flex items-center justify-center`}
        >
          <img
            className={`w-full md:max-w-md lg:max-w-lg xl:max-w-xl h-full imgShadow`}
            src={Home}
            loading="lazy"
            alt={"رستویار"}
          />
        </article>
        <header
          className={`color-gradient flex items-center justify-center row-start-1 row-end-2`}
        >
          <h1
            className={`text-5xl lg:text-9xl color-gradient tracking-widest Casablanca font-extrabold`}
          >
            رستویار
          </h1>
        </header>

        <article className={`flex items-end justify-center px-2`}>
          <p
            className={`text-blue-400 md:font-bold text-sm md:text-lg Dirooz text-justify`}
          >
            {" "}
            مدیریت سفارشات رستوران با کمک تکنولوژی! میدونی هدف ما اینه که وقت
            هیچکس گرفته نشه، ینی هیچکس قرار نیست از مشتری سفارشی به صورت دستی
            بگیره ...
          </p>
        </article>

        <article className={`flex items-center justify-center`}>
          <Link
            className={`Casablanca text-white gradient px-6 text-sm lg:text-lg md:px-10 py-3 rounded-md self-center`}
            to="/services"
          >
            توضیحات بیشتر
            <BiMessageSquareDetail className={`mr-3 inline`} />
          </Link>
        </article>
      </section>
    </main>
  );
};

export default HomeIntroduction;
