import { NavLink } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SiAirtable } from "react-icons/si";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaLayerGroup } from "react-icons/fa";
import UserJobContext from "../../Context/UserJobContext";
import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const managerLinks = [
  {
    title: "میز ها",
    to: "tables",
    icon: <SiAirtable className={`inline ml-2`} />,
  },
  {
    title: "غذا",
    to: "products",
    icon: <IoFastFoodOutline className={`inline ml-2`} />,
  },
  {
    title: "دسته بندی ها",
    to: "filter-groups",
    icon: <FaLayerGroup className={`inline ml-2`} />,
  },
  {
    title: "گزارشات",
    to: "report",
    icon: <BsCardChecklist className={`inline ml-2`} />,
  },
  {
    title: "پرسنل",
    to: "personnel",
    icon: <HiUserGroup className={`inline ml-2`} />,
  },
  {
    title: <BiMessageSquareDetail className={`inline`} />,
    to: "/manage",
  },
];
const accountantsLinks = [
  {
    title: "میز ها",
    to: "tables",
    icon: <SiAirtable className={`inline ml-2`} />,
  },
  {
    title: "غذا",
    to: "products",
    icon: <IoFastFoodOutline className={`inline ml-2`} />,
  },
  {
    title: "دسته بندی ها",
    to: "filter-groups",
    icon: <FaLayerGroup className={`inline ml-2`} />,
  },
  {
    title: "گزارشات",
    to: "report",
    icon: <BsCardChecklist className={`inline ml-2`} />,
  },
  {
    title: <BiMessageSquareDetail className={`inline`} />,
    to: "/manage",
  },
];
const publicLinks = [
  {
    title: "میز ها",
    to: "tables",
    icon: <SiAirtable className={`inline ml-2`} />,
  },
  {
    title: "توضیحات",
    to: "/manage",
    icon: <BiMessageSquareDetail className={`inline ml-2`} />,
  },
];

const ManageNavigation = () => {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState(null);
  const [height, setHeight] = useState(0);
  const { job } = useSelector((state) => state.user);

  useEffect(() => {
    if (
      job === "گارسون" ||
      job === "آشپز" ||
      job === "سرآشپز" ||
      job === "منشی"
    )
      setLinks(publicLinks);
    if (job === "حسابدار") setLinks(accountantsLinks);
    if (job === "مدیریت") setLinks(managerLinks);
  }, []);

  useEffect(() => {
    if (links) {
      let h = 0;
      links.map(() => (h += 46));
      setHeight(h);
    }
  });
  return (
    <nav className={`mt-10 border-b-2 border-blue-400 py-2`}>
      <button
        type="button"
        onClick={() => setOpen((prevState) => !prevState)}
        className={`w-8 lg:hidden block transition-all mb-1 mr-auto`}
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
        style={{ height: open && `${height}px` }}
        className={`flex flex-col justify-center lg:justify-start lg:flex-row overflow-hidden transition-all duration-300 h-0 lg:h-auto ${
          open && `boxShadowInner p-2 rounded-md`
        }`}
      >
        {links && height
          ? links.map((link) => (
              <li
                key={link.to}
                style={
                  link.to === "/manage" && !open
                    ? { marginRight: "auto" }
                    : null
                }
                className={`my-1 md:mb-0`}
              >
                <NavLink
                  className={({ isActive }) =>
                    `w-full lg:w-auto block text-xs md:text-sm px-1 md:px-4 ANoor py-2 cursor-pointer ml-2 rounded-md ` +
                    (isActive ? `bg-blue-400 text-white` : "text-blue-400")
                  }
                  to={link.to}
                >
                  {link.icon}
                  {link.title}
                </NavLink>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

export default ManageNavigation;
