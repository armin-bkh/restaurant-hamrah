import { NavLink } from "react-router-dom";

const links = [
  { title: "میز ها", to: "/manage/tables" },
  { title: "مدیریت محصولات", to: "/manage/manage-products" },
];

const ManageUserNavigation = () => {
  return (
    <nav className={`mt-10`}>
      <ul className={`flex`}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              className={`text-yellow-400 px-4 py-2 cursor-pointer ml-2 rounded-md`}
              activeClassName={`border-t-4 border-yellow-400`}
              to={link.to}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ManageUserNavigation;
