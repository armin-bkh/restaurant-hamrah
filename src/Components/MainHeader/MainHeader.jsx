import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoIosJournal, IoIosFingerPrint } from "react-icons/io";

const links = [
  {
    to: "/",
    title: "خانه",
    icon: <FaHome className={`inline mg-1 lg:ml-3`} />,
  },
  {
    to: "/services",
    title: "خدمات",
    icon: <IoIosJournal className={`inline ml-1 lg:ml-3`} />,
  },
  {
    to: "/about-us",
    title: "درباره ما",
    icon: <FaUsers className={`inline ml-1 lg:ml-3`} />,
  },
  {
    to: "/contact",
    title: "تماس با ما",
    icon: <MdContactMail className={`inline ml-1 lg:ml-3`} />,
  },
  {
    to: "/login",
    title: "ورود",
    icon: <IoIosFingerPrint className={`inline ml-1 lg:ml-3`} />,
  },
];

const MainHeader = () => {
  return (
    <header className={`py-5 px-3 bgLight boxShadow v sticky top-1.5 w-full`}>
      <nav>
        <ul className={`flex items-center`}>
          {links.map((link) => (
            <li
              key={link.to}
              className={`${
                link.to === "/login" && "mr-auto"
              } text-xs sm:text-sm lg:text-lg xl:text-xl`}
            >
              <Link
                className={`px-1 md:px-5 py-2 cursor-pointer text-blue-400 Casablanca hover:bg-blue-400
                hover:text-white rounded-md`}
                to={link.to}
              >
                {link.icon} {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
