import { NavLink } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { HiFolderRemove } from "react-icons/hi";

const links = [
  { to: "add-product", title: "اضافه", icon: <BiBookAdd /> },
  { to: "edit-product", title: "تغییر", icon: <FaEdit /> },
  {
    to: "remove-product",
    title: "حذف",
    icon: <HiFolderRemove />,
  },
];

const ManageProductsNavigation = () => {
  return (
    <aside className={`ANoor sticky top-4 z-20 mb-10 md:mb-0`}>
      <nav className={`md:sticky top-4`}>
        <ul className={`p-2 boxShadow rounded-md bgLight`}>
          {links.map((link) => (
            <li
              key={link.to}
              className={`my-2 text-sm lg:text-lg w-full flex justify-between items-center`}
            >
              <NavLink
                className={({ isActive }) =>
                  `text-blue-400 w-full flex justify-between items-center
                 py-2 border-b hover:border-blue-400 ` +
                  (isActive ? "border-blue-400" : "border-blue-200")
                }
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
