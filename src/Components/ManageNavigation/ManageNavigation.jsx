import { NavLink } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SiAirtable } from "react-icons/si";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaLayerGroup } from "react-icons/fa";
import UserJobContext from "../../Context/UserJobContext";
import { useContext, useState } from "react";
import styles from './ManageNavigation.module.scss';

const links = [
  {
    title: "میز ها",
    to: "/manage/tables",
    icon: <SiAirtable className={`inline ml-2`} />,
  },
  {
    title: "غذا",
    to: "/manage/products",
    icon: <IoFastFoodOutline className={`inline ml-2`} />,
  },
  {
    title: "دسته بندی ها",
    to: "/manage/filter-groups",
    icon: <FaLayerGroup className={`inline ml-2`} />,
  },
  {
    title: "گزارشات",
    to: "/manage/report",
    icon: <BsCardChecklist className={`inline ml-2`} />,
  },
  {
    title: "پرسنل",
    to: "/manage/personnel",
    icon: <HiUserGroup className={`inline ml-2`} />,
  },
  {
    title: <BiMessageSquareDetail className={`inline`} />,
    to: "/manage",
    exact: true,
  },
];

const ManageNavigation = () => {
  const [open, setOpen] = useState(false);
  const userJob = useContext(UserJobContext);

  
  let returnValue;
  if (
    userJob === "گارسون" ||
    userJob === "آشپز" ||
    userJob === "سرآشپز" ||
    userJob === "منشی"
  ) {
    returnValue = links.map((link) => {
      if (link.to === "/manage/tables" || link.to === "/manage") {
        return (
          <li
            key={link.to}
            style={link.to === "/manage" && !open  ? { marginRight: "auto" } : null}
            className={`my-1 md:mb-0 text-blue-400`}
          >
            <NavLink
              className={`${open && 'w-full'} block text-xs md:text-sm px-1 md:px-4 ANoor py-2 cursor-pointer ml-2 rounded-md`}
              activeClassName={`bg-blue-400 text-white  md:border-t-4 border-blue-400`}
              to={link.to}
              exact={link.exact || false}
            >
              {link.icon}
              {link.title}
            </NavLink>
          </li>
        );
      }
    });
  }
  if (userJob === "مدیریت") {
    returnValue = links.map((link) => (
      <li
        key={link.to}
        style={link.to === "/manage" && !open ? { marginRight: "auto" } : null}
        className={`my-1 md:mb-0 text-blue-400`}
      >
        <NavLink
          className={`${open && 'w-full'} block text-xs md:text-sm px-1 md:px-4 ANoor py-2 cursor-pointer ml-2 rounded-md`}
          activeClassName={`bg-blue-400 text-white md:border-t-4 border-blue-400`}
          to={link.to}
          exact={link.exact || false}
        >
          {link.icon}
          {link.title}
        </NavLink>
      </li>
    ));
  }
  if (userJob === "حسابدار") {
    returnValue = links.map((link) => {
      if (
        link.to === "/manage/tables" ||
        link.to === "/manage/report" ||
        link.to === "/manage/products" ||
        link.to === "/manage" ||
        link.to === "/manage/filter-groups"
      ) {
        return (
          <li
            key={link.to}
            style={link.to === "/manage" && !open  ? { marginRight: "auto" } : null}
            className={`my-1 md:mb-0 text-blue-400`}
          >
            <NavLink
              className={` ${open && 'w-full'} block text-xs md:text-sm px-1 md:px-4 ANoor py-2 cursor-pointer ml-2 rounded-md`}
              activeClassName={`bg-blue-400 text-white md:border-t-4 border-blue-400`}
              to={link.to}
              exact={link.exact || false}
            >
              {link.icon}
              {link.title}
            </NavLink>
          </li>
        );
      }
    });
  }

  return (
    <nav className={`mt-10 border-b-2 border-blue-400 pt-2 pb-2 md:pb-0`}>
      <button type="button" onClick={()=> setOpen(prevState => !prevState)} className={`w-8 md:hidden block mr-auto`}>
        <div className={`${open ? 'w-3/5 rounded-bl-xl rounded-r-sm' : 'w-full rounded-sm'} transition-all ml-auto h-1.5 my-1.5 bg-blue-400`}></div>
        <div className={`h-1.5 my-1.5 rounded-sm bg-blue-400`}></div>
        <div className={`${open ? 'w-3/5 rounded-tr-xl rounded-l-sm' : 'w-full rounded-sm'} transition-all mr-auto h-1.5 my-1.5 bg-blue-400`}></div>
        </button>
      <ul className={`flex flex-col md:flex-row overflow-hidden transition-all ${open ? `h-auto boxShadowInner p-2 rounded-md` : 'md:h-auto h-0'}`}>
        {/* {links.map((link) => (
          <li
            key={link.to}
            style={link.to === "/manage" ? { marginRight: "auto" } : null}
          >
            <NavLink
              className={`text-blue-400 text-xs md:text-sm px-1 md:px-4 ANoor py-2 cursor-pointer ml-2 rounded-md`}
              activeClassName={`border-t-4 border-blue-400`}
              to={link.to}
              exact={link.exact || false}
            >
              {link.icon}
              {link.title}
            </NavLink>
          </li>
        ))} */}
        {returnValue}
      </ul>
    </nav>
  );
};

export default ManageNavigation;
