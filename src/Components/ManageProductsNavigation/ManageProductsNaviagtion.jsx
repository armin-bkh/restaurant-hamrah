import { NavLink } from "react-router-dom";
import {} from "react-icons";
import styles from './ManageProductsNavigation.module.scss';

const links = [
  { to: "/manage/manage-products/add-product", title: "اضافه" },
  { to: "/manage/manage-products/edit-product", title: "تغییر" },
  { to: "/manage/manage-products/remove-product", title: "حذف" },
];

const ManageProductsNavigation = () => {
  return (
    <aside className={`ANoor mb-10 md:mb-0 ${styles.productsNavigation}`}>
      <nav className={`sticky top-4`}>
        <ul className={`p-2 ${styles.navConitaner}`}>
          {links.map((link) => (
            <li key={link.to} className={`mb-4 w-full`}>
              <NavLink
                className={`text-white w-full block py-2 border-b border-gray-800 hover:text-yellow-400`}
                activeClassName={`border-yellow-400 text-yellow-400`}
                to={link.to}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default ManageProductsNavigation;
