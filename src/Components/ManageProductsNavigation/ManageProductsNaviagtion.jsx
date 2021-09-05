import { NavLink } from "react-router-dom"
import {} from 'react-icons';
const links = [
    {to: "/manage/manage-products/add-product", title: "اضافه",},
    {to: "/manage/manage-products/edit-product", title: 'تغییر',},
    {to: "/manage/manage-products/remove-product", title: 'حذف',},
]

const ManageProductsNavigation = () => {
    return ( 
        <nav>
            <ul>
                {
                    links.map(link => (
                        <li key={link.to}>
                            <NavLink to={link.to}>{link.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
     );
}
 
export default ManageProductsNavigation;