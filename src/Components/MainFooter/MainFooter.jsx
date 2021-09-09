import { Link } from "react-router-dom";
import { FaTelegram, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer
      className={`text-xs sm:text-sm md:text-lg px-5 py-4 text-black bgLight Dirooz boxShadowOuter rounded-t-3xl`}
    >
      <p>تمامی حقوق ارتا ارتباط اطلس محفوظ است</p>
      <nav className={`mt-4`}>
        <ul className={`flex w-full justify-evenly items-center`}>
          <li
            className={`w-14 h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <Link
              className={`text-blue-400 text-3xl cursor-pointer`}
              to="/manage"
            >
              <FaTelegram />
            </Link>
          </li>
          <li
            className={`w-14 h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <Link
              className={`text-blue-400 text-3xl cursor-pointer`}
              to="/manage"
            >
              <FaWhatsapp />
            </Link>
          </li>
          <li
            className={`w-14 h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <Link
              className={`text-blue-400 text-3xl cursor-pointer`}
              to="/manage"
            >
              <FaLinkedin />
            </Link>
          </li>
          <li
            className={`w-14 h-14 flex justify-center items-center rounded-full transition-colors duration-500 hover:bg-blue-200`}
          >
            <Link
              className={`text-blue-400 text-3xl cursor-pointer`}
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
