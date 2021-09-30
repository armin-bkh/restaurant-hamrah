import { NavLink } from "react-router-dom";
import {BiBookAdd, } from "react-icons/bi";
import { FaEdit } from 'react-icons/fa';
import { HiFolderRemove } from 'react-icons/hi';

const links = [
  { to: "/manage/products/add-product", title: "اضافه", icon: <BiBookAdd/> },
  { to: "/manage/products/edit-product", title: "تغییر", icon: <FaEdit/> },
  { to: "/manage/products/remove-product", title: "حذف", icon: <HiFolderRemove/> },
];

const ManageProductsNavigation = () => {
  return (
    <aside className={`ANoor mb-10 md:mb-0`}>
      <nav className={`sticky top-4`}>
        <ul className={`p-2 boxShadow rounded-md bgLight`}>
          {links.map((link) => (
            <li key={link.to} className={`my-2 text-sm lg:text-lg w-full flex justify-between items-center`}>
              <NavLink
                className={`text-blue-400 w-full flex justify-between items-center
                 py-2 border-b border-blue-200 hover:border-blue-400`}
                activeClassName={`border-blue-400 text-yellow-400`}
                to={link.to}
              >
                {link.title}
                {link.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default ManageProductsNavigation;
