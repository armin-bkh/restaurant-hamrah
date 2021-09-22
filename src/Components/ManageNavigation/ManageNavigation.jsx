import { NavLink } from "react-router-dom";
import { BiMessageSquareDetail } from 'react-icons/bi';
import { SiAirtable } from 'react-icons/si';
import { IoFastFoodOutline } from 'react-icons/io5';
import { BsCardChecklist } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';

const links = [
  { title: "میز ها", to: "/manage/manage-tables", icon: <SiAirtable className={`inline ml-2`}/> },
  { title: "غذا", to: "/manage/manage-products", icon: <IoFastFoodOutline className={`inline ml-2`}/>  },
  { title: "گزارشات", to: "/manage/report", icon: <BsCardChecklist className={`inline ml-2`}/>  },
  { title: "پرسنل", to: "/manage/personnel", icon: <HiUserGroup className={`inline ml-2`}/>  },
  { title: <BiMessageSquareDetail className={`inline`}/>, to: "/manage", exact:true},
];

const ManageNavigation = () => {
  return (
    <nav className={`mt-10 border-b-2 border-blue-400 py-2`}>
      <ul className={`flex`}>
        {links.map((link) => (
          <li key={link.to} style={link.to === "/manage" ? {marginRight: 'auto'} : null}>
            <NavLink
              className={`text-blue-400 px-4 ANoor py-2 cursor-pointer ml-2 rounded-md`}
              activeClassName={`border-t-4 border-blue-400`}
              to={link.to}
              exact={link.exact || false}
            >
              {link.icon}
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ManageNavigation;
