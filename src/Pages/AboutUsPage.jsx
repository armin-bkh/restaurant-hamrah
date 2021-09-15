import MainLayout from "../Layouts/MainLayout";
import Company from "../Assets/SVG/company-animate.svg";
import { useEffect } from "react";

const AboutUsPage = () => {

  useEffect(()=>{
    document.title = "درباره ما"  
  }, [])

  return (
    <MainLayout>
      <main>
        <section
          className={`grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 py-4 min-h-screen`}
        >
          <article>
            <h1 className={`color-gradient lg:text-8xl text-3xl md:text-5xl py-3 text-center Casablanca`}>
              آرتا ارتباط اطلس
            </h1>
          </article>
          <article className={`row-span-3 md:row-span-full md:col-start-2 md:col-end-3 flex justify-center items-center`}>
            <img
              style={{ zIndex: `-1` }}
              className={`max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:w-full imgShadow relative`}
              loading="lazy"
              src={Company}
              alt="شرکت"
            />
          </article>
          <article className={`mb-7`}>
            <p className={`text-blue-400 Dirooz text-xs sm:text-sm lg:text-lg text-justify px-3`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود
            </p>
          </article>
          <article className={`mb-3`}>
            <p className={`text-blue-400 Dirooz text-xs sm:text-sm lg:text-lg text-justify px-3`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ
            </p>
          </article>
          <article>
            <p className={`text-blue-400 Dirooz text-xs sm:text-sm lg:text-lg text-justify px-3`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود
            </p>
          </article>
        </section>
      </main>
    </MainLayout>
  );
};

export default AboutUsPage;
