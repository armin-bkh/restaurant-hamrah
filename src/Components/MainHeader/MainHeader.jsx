import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoIosJournal, IoIosFingerPrint } from "react-icons/io";
import { IoRestaurant } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

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

const logedInLinks = [
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
    to: "/manage",
    title: "رستوران",
    icon: <IoRestaurant className={`inline ml-1 lg:ml-3`} />,
  },
];

const MainHeader = () => {
  const [nav, setNav] = useState([]);
  const user = useSelector((state) => state.user);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (user) setNav(logedInLinks);
    else setNav(links);
  }, [user]);

  return (
    <header className={`py-2 px-3 bgLight boxShadow sticky top-0 z-0 w-full`}>
      <nav className={`flex items-center`}>
        <h1
          className={`Casablanca color-gradient text-xl md:text-2xl lg:text-4xl z-50 ml-10`}
        >
          رستویار
        </h1>
        <button
          type="button"
          onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
          className={`lg:hidden mr-auto z-50`}
        >
          <div
            className={`w-8 h-1 bg-blue-400 transition-all rounded-md ${
              isShow && "transform rotate-45 translate-y-0.5"
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-blue-400 transition-all rounded-md my-1.5 ${
              isShow && "sr-only"
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-blue-400 transition-all rounded-md ${
              isShow && "transform -rotate-45 -translate-y-0.5"
            }`}
          ></div>
        </button>
        <ul
          className={`flex duration-700 flex-1 top-0 right-0 flex-col justify-center w-full h-full lg:w-auto lg:h-auto transition-all
           lg:justify-start items-center fixed lg:static lg:flex-row ${
             !isShow ? "-top-full" : " bg-opacity-90 backdrop-filter bg-white"
           }`}
        >
          {nav.map((link) => (
            <li
              key={link.to}
              className={`${
                !isShow && link.to === "/contact" && "lg:ml-auto"
              } my-3 text-lg xl:text-xl mx-2`}
            >
              <NavLink
                className={({ isActive }) =>
                  `px-10 md:px-5 py-3 cursor-pointer Casablanca hover:text-white hover:bg-blue-400
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
