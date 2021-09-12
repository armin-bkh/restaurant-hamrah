import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiReservedFill } from "react-icons/ri";
import { SiManageiq } from "react-icons/si";
import { HiOutlineLogin } from "react-icons/hi";

const links = [
  { to: "/", title: "خانه", icon: <FaHome className={`inline mg-1 lg:ml-3`} /> },
  {
    to: "/reservation",
    title: "رزرو",
    icon: <RiReservedFill className={`inline ml-1 lg:ml-3`} />,
  },
  {
    to: "/manage",
    title: "مدیریت",
    icon: <SiManageiq className={`inline ml-1 lg:ml-3`} />,
  },
  {
    to: "/auth",
    title: "ورود/ثبت نام",
    icon: <HiOutlineLogin className={`inline ml-1 lg:ml-3`} />,
  },
];

const MainHeader = () => {
  return (
    <header
      className={`py-5 px-3 bgLight boxShadow v sticky top-0 w-full`}
    >
      <nav>
        <ul className={`flex items-center`}>
          {links.map((link) => (
            <li
              key={link.to}
              className={`${link.to === "/auth" && "mr-auto"} text-xs sm:text-sm lg:text-lg xl:text-xl`}
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
