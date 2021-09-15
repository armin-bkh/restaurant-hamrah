import { useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import QrCode from "../Assets/SVG/qr-code-animate.svg";
import Manage from "../Assets/SVG/at-work-animate.svg";
import Food from "../Assets/SVG/pizza-sharing-animate.svg";

const ServicesPage = () => {
  
  useEffect(() => {
    document.title = "خدمات";
  }, []);

  return (
    <MainLayout>
      <main className={`min-h-screen`}>
        <section className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3`}>
          <article className={`flex flex-col p-10`}>
            <img
              className={`max-w-xs sm:max-w-sm md:max-w-md lg:w-full imgShadow block mx-auto`}
              src={QrCode}
              alt="QR-Code"
              loading="lazy"
            />
            <h1
              className={`color-gradient text-2xl md:text-2xl lg:text-4xl xl:text-5xl mr-9 -mt-7 Casablanca mb-10`}
            >
              کد QR
            </h1>
            <p className={`text-justify mb-5 text-blue-400 Dirooz text-xs sm:text-sm`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
            </p>
            <p className={`text-justify mb-3 text-blue-400 Dirooz text-xs sm:text-sm`}>
              را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
              زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
              زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
              پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className={`text-justify text-blue-400 Dirooz text-xs sm:text-sm`}>
              را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
              زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
            </p>
          </article>
          <article className={`flex flex-col p-10`}>
            <img
              className={`max-w-xs sm:max-w-sm md:max-w-md lg:w-full imgShadow block mx-auto`}
              src={Manage}
              alt="مدیریت"
              loading="lazy"
            />
            <h1
              className={`color-gradient text-2xl md:text-2xl lg:text-4xl xl:text-5xl mr-9 -mt-7 Casablanca mb-10`}
            >
              محصول
            </h1>
            <p className={`text-justify mb-5 text-blue-400 Dirooz text-xs sm:text-sm`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
            </p>
            <p className={`text-justify mb-3 text-blue-400 Dirooz text-xs sm:text-sm`}>
              را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
              زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
              زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
              پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className={`text-justify text-blue-400 Dirooz text-xs sm:text-sm`}>
              را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
              زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
            </p>
          </article>
          <article className={`flex flex-col p-10`}>
            <img
              className={`max-w-xs sm:max-w-sm md:max-w-md lg:w-full imgShadow block mx-auto`}
              src={Food}
              alt="میز"
              loading="lazy"
            />
            <h1
              className={`color-gradient text-2xl md:text-2xl lg:text-4xl xl:text-5xl mr-9 -mt-7 Casablanca mb-10 `}
            >
              میز
            </h1>
            <p className={`text-justify mb-5 text-blue-400 Dirooz text-xs sm:text-sm`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
            </p>
            <p className={`text-justify mb-3 text-blue-400 Dirooz text-xs sm:text-sm`}>
              را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
              زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
              زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
              پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className={`text-justify text-blue-400 Dirooz text-xs sm:text-sm`}>
              را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
              زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
            </p>
          </article>
        </section>
      </main>
    </MainLayout>
  );
};

export default ServicesPage;
