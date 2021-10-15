import {
  FaTelegram,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer
      className={`text-xs sm:text-sm lg:text-lg px-5 py-4 text-black bgLight Casablanca boxShadowOuter`}
    >
      <p>تمامی حقوق ارتا ارتباط اطلس محفوظ است</p>
      <nav className={`mt-4`}>
        <ul className={`flex w-full justify-evenly items-center`}>
          <li
            className={`w-6 h-6 lg:w-14 lg:h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <a
              className={`text-blue-400 text-sm md:text-lg lg:text-2xl 2xl:text-3xl cursor-pointer`}
              href="https://www.telegram.me/Ar921dvl"
              target="_blank" rel="noreferrer"
            >
              <FaTelegram />
            </a>
          </li>
          <li
            className={`w-6 h-6 lg:w-14 lg:h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <a
              className={`text-blue-400 text-sm md:text-lg lg:text-2xl 2xl:text-3xl cursor-pointer`}
              href="https://www.varzesh3.com"
              target="_blank" rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li
            className={`w-6 h-6 lg:w-14 lg:h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <a
              className={`text-blue-400 text-sm md:text-lg lg:text-2xl 2xl:text-3xl cursor-pointer`}
              href="https://www.linkedin.com/in/armin-bakhshi-627805217"
              target="_blank" rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li
            className={`w-6 h-6 lg:w-14 lg:h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <a
              className={`text-blue-400 text-sm md:text-lg lg:text-2xl 2xl:text-3xl cursor-pointer`}
              href="https://www.instagram.com/rminbkh"
              target="_blank" rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default MainFooter;
