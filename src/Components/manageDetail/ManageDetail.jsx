import styles from './ManageDetail.module.scss';

const manageDetail = () => {
  return (
    <main className={`text-white min-h-screen flex justify-evenly p-5 flex-col md:flex-row md:items-center flex-wrap`}>
        <article className={`bg-gray-500 p-5 rounded-lg relative h-1/5 ${styles.boxContainer}`}>
          <h1 className={`mb-5 FPArsoo text-xl lg:text-3xl`}>میز ها</h1>
          <p className={`z-20 Dirooz text-sm lg:text-lg`}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است<br/>، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با ه
          </p>
          <h2 className={`absolute bottom-10 left-2 transform -rotate-90 
           FPArsoo z-10 opacity-70 transition duration-500 ${styles.textMute}`}>میز ها</h2>
        </article>
        <article className={`bg-gray-500 p-5 rounded-lg relative h-1/5 ${styles.boxContainer}`}>
          <h1 className={`mb-5 FPArsoo text-xl lg:text-3xl`}>غذا</h1>
          <p className={`z-20 Dirooz text-sm lg:text-lg`}>
            لورم ایپسوم متن ساختگی با تولید  <br/>سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچ
          </p>
          <h2 className={`absolute bottom-10 left-2 transform -rotate-90 
           FPArsoo z-10 opacity-70 transition duration-500 ${styles.textMute}`}>غذا</h2>
        </article>
    </main>
  );
};

export default manageDetail;
