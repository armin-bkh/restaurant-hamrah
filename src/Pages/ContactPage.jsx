import MainLayout from "../Layouts/MainLayout";
import Contact from "../Assets/SVG/emails-animate.svg";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.title = "تماس با ما";
  }, []);

  return (
    <MainLayout>
      <main className={`min-h-screen`}>
        <section
          className={`grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 p-5`}
        >
          <article
            className={`flex flex-col justify-evenly items-start Dirooz`}
          >
            <h1
              className={`color-gradient text-4xl md:text-5xl lg:text-7xl xl:text-9xl mb-5 Casablanca`}
            >
              تماس با ما
            </h1>
            <h1
              className={`text-blue-400 text-base md:text-xl lg:text-2xl mb-2`}
            >
              آدرس الکترونیکی: arminbkh0921@yahoo.com
            </h1>
            <h1 className={`text-blue-400 text-base md:text-xl lg:text-2xl`}>
              واتس اپ: 09213506150
            </h1>
          </article>
          <article
            className={`row-start-1 md:row-span-2 flex justify-center items-center`}
          >
            <img
              className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl imgShadow`}
              src={Contact}
              alt="تماس با ما"
            />
          </article>
          <article
            className={`Dirooz text-blue-400 text-sm md:text-base xl:text-lg md:col-span-2 mt-10 md:mt-0`}
          >
            <p className={`mb-5`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p>
              برای ارتباط بیشتر با ما میتوانید صفحات مجازی ما را در لینکدین و
              اینستاگرام و تلگرام و واتس اپ دنبال کنید
            </p>
          </article>
        </section>
      </main>
    </MainLayout>
  );
};

export default ContactPage;
