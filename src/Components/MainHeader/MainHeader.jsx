import { NavLink } from "react-router-dom";
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
    <header className={`py-7 px-3 bgLight boxShadow sticky top-0 z-0 w-full`}>
      <nav>
        <ul className={`flex items-center justify-center`}>
          {links.map((link) => (
            <li
              key={link.to}
              className={`${
                link.to === "/login" && "mr-auto"
              } text-xs sm:text-sm lg:text-lg xl:text-xl mx-2`}
            >
              <NavLink
                className={({ isActive }) =>
                  `px-1 md:px-5 py-3 cursor-pointer Casablanca hover:text-white hover:bg-blue-400
                 rounded-md ` +
                  (isActive ? "text-white bg-blue-400" : "text-blue-400")
                }
                to={link.to}
              >
                {link.icon} {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
