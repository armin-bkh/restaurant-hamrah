import table from "../../images/Data report-amico.png";
import food from "../../images/Social interaction-amico.png";

const manageDetail = () => {
  return (
    <main
      className={`text-black min-h-screen flex justify-evenly p-5 flex-col`}
    >
      <article
        className={`p-5 rounded-lg relative flex flex-col md:flex-row items-center`}
      >
        <img
          className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-full imgShadow`}
          src={food}
          loading="lazy"
          alt="میز ها"
        />
        <div className={`mr-5 -translate-y-12 md:translate-y-0 transform`}>
          <h1 className={`mb-16 mr-5 Casablanca text-xl color-gradient lg:text-5xl 2xl:text-7xl`}>
            میز ها
          </h1>
          <p className={`z-20 Dirooz text-sm lg:text-lg xl:text-xl 2xl:text-2xl
           3xl:text-3xl 4xl:text-4xl in text-blue-400 text-justify`}>
            در بخش میز ها شما میتوانید لیست میز هایی ک غذا سفارش داده اند را مشاهده
            نمایید و با کلیک بر روی دکمه حذف به راحتی آن را خالی کنید.
          </p>
          <h2
            className={`absolute bottom-1 left-2 translate-y-8 transform -rotate-90 
           Casablanca z-10 opacity-50 transition duration-500 text-green-300`}
          >
            میز ها
          </h2>
        </div>
      </article>
      <article
        className={`p-5 rounded-lg relative flex flex-col md:flex-row items-center`}
      >
        <img
          className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-full imgShadow`}
          src={table}
          loading="lazy"
          alt="غذا ها"
        />
        <div className={`mr-5 -translate-y-12 md:translate-y-0 transform`}>
          <h1 className={`mb-16 mr-5 Casablanca text-xl color-gradient lg:text-5xl 2xl:text-7xl`}>
            غذا ها
          </h1>
          <p className={`z-20 Dirooz text-sm lg:text-lg xl:text-xl 2xl:text-2xl
           3xl:text-3xl 4xl:text-4xl in text-blue-400 text-justify`}>
            در بخش غذا ها میتوانید لیست غذاهای منو رستوران را کنترل کنید در سربرگ حذف غذا
            مورد نظر را حذف کنید در سربرگ اضافه غذای جدید اضافه کنید و در سربرگ تغییر مشخصات غذا های
            موجود را تغییر دهید
          </p>
          <h2
            className={`absolute bottom-1 left-2 translate-y-8 transform -rotate-90 
           Casablanca z-10 opacity-50 transition duration-500 text-green-300`}
          >
            غذا ها
          </h2>
        </div>
      </article>
    </main>
  );
};

export default manageDetail;
