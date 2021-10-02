import { NavLink } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SiAirtable } from "react-icons/si";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaLayerGroup } from "react-icons/fa";
import UserJobContext from "../../Context/UserJobContext";
import { useContext, useState, useEffect } from "react";
import styles from "./ManageNavigation.module.scss";

const managerLinks = [
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
const accountantsLinks = [
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
    title: <BiMessageSquareDetail className={`inline`} />,
    to: "/manage",
    exact: true,
  },
];
const publicLinks = [
  {
    title: "میز ها",
    to: "/manage/tables",
    icon: <SiAirtable className={`inline ml-2`} />,
  },
  {
    title: "توضیحات",
    to: "/manage",
    exact: true,
    icon: <BiMessageSquareDetail className={`inline ml-2`} />,
  },
];

const ManageNavigation = () => {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState(null);
  const [height, setHeight] = useState(0);
  const userJob = useContext(UserJobContext);

  useEffect(()=>{
    if(userJob === "گارسون" || userJob === "آشپز" || userJob === "سرآشپز" || userJob === "منشی") setLinks(publicLinks);
    if(userJob === "حسابدار") setLinks(accountantsLinks);
    if(userJob === "مدیریت")setLinks(managerLinks);
  }, [])

  useEffect(()=>{
    if(links) {
      let h = 0;
      links.map(()=> h += 46);
      setHeight(h);
    }
    });
        return (
    <nav className={`mt-10 border-b-2 border-blue-400 py-2`}>
      <button
        type="button"
        onClick={() => setOpen((prevState) => !prevState)}
        className={`w-8 md:hidden block transition-all mb-1 mr-auto`}
      >
        <div
          className={`${
            open ? "w-3/5 rounded-bl-xl rounded-r-sm" : "w-full rounded-sm"
          } transition-all ml-auto h-1.5 my-1.5 bg-blue-400`}
        ></div>
        <div className={`h-1.5 my-1.5 rounded-sm bg-blue-400`}></div>
        <div
          className={`${
            open ? "w-3/5 rounded-tr-xl rounded-l-sm" : "w-full rounded-sm"
          } transition-all mr-auto h-1.5 my-1.5 bg-blue-400`}
        ></div>
      </button>
      <ul
      style={{height: open && `${height}px`}}
        className={`flex flex-col justify-center md:justify-start md:flex-row overflow-hidden transition-all duration-300 h-0 md:h-auto ${open && `boxShadowInner p-2 rounded-md`}`}
      >
        { links && height ? links.map((link) => (
          <li
          key={link.to}
          style={link.to === "/manage" && !open ? { marginRight: "auto" } : null}
          className={`my-1 md:mb-0 text-blue-400`}
        >
          <NavLink
            className={`w-full md:w-auto block text-xs md:text-sm px-1 md:px-4 ANoor py-2 cursor-pointer ml-2 rounded-md`}
            activeClassName={`bg-blue-400 text-white md:border-t-4 border-blue-400`}
            to={link.to}
            exact={link.exact || false}
          >
            {link.icon}
            {link.title}
          </NavLink>
        </li>
        )) : null}
      </ul>
    </nav>
  );
};

export default ManageNavigation;
