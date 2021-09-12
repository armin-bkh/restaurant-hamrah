import { Link } from "react-router-dom";
import {
  FaTelegram,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer
      className={`text-xs sm:text-sm lg:text-lg px-5 py-4 text-black bgLight Casablanca boxShadowOuter rounded-t-3xl`}
    >
      <p>تمامی حقوق ارتا ارتباط اطلس محفوظ است</p>
      <nav className={`mt-4`}>
        <ul className={`flex w-full justify-evenly items-center`}>
          <li
            className={`w-6 h-6 lg:w-14 lg:h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <Link
              className={`text-blue-400 text-sm md:text-lg lg:text-2xl 2xl:text-3xl cursor-pointer`}
              to="/manage"
            >
              <FaTelegram />
            </Link>
          </li>
          <li
            className={`w-6 h-6 lg:w-14 lg:h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <Link
              className={`text-blue-400 text-sm md:text-lg lg:text-2xl 2xl:text-3xl cursor-pointer`}
              to="/manage"
            >
              <FaWhatsapp />
            </Link>
          </li>
          <li
            className={`w-6 h-6 lg:w-14 lg:h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <Link
              className={`text-blue-400 text-sm md:text-lg lg:text-2xl 2xl:text-3xl cursor-pointer`}
              to="/manage"
            >
              <FaLinkedin />
            </Link>
          </li>
          <li
            className={`w-6 h-6 lg:w-14 lg:h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <Link
              className={`text-blue-400 text-sm md:text-lg lg:text-2xl 2xl:text-3xl cursor-pointer`}
              to="/manage"
            >
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default MainFooter;
