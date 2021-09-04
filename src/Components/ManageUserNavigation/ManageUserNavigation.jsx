import { NavLink } from "react-router-dom"

const links = [
    {title: "میز ها", to: "/manage/tables"},
    {title: "مدیریت محصولات", to: "/manage/manage-products"},
]

const ManageUserNavigation = () => {
    return ( 
        <nav className={`mt-4`}>
            <ul className={`flex`}>
               {
                   links.map(link => (
                       <li key={link.to}>
                           <NavLink className={`px-4 py-2 cursor-pointer ml-2 hover:text-white border-b-4 border-gray-700 hover:bg-gray-700 rounded-md`} to={link.to}>
                                {link.title}
                           </NavLink>
                       </li>
                   ))
               }
            </ul>
        </nav>
     );
}
 
export default ManageUserNavigation;