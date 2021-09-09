import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { RiReservedFill } from 'react-icons/ri';
import { SiManageiq } from 'react-icons/si';
import { HiOutlineLogin } from 'react-icons/hi';

const links = [
    {to: '/', title: 'خانه', icon: <FaHome className={`inline ml-3`} />},
    {to: '/reservation', title: 'رزرو', icon: <RiReservedFill className={`inline ml-3`} />},
    {to: '/manage', title: 'مدیریت', icon: <SiManageiq className={`inline ml-3`} />},
    {to: '/auth', title: 'ورود/ثبت نام', icon: <HiOutlineLogin className={`inline ml-3`} />},
]

const MainHeader = () => {
    return ( 
        <header className={`py-5 px-3 bgLight boxShadow rounded-b-3xl`}>
            <nav>
                <ul className={`flex items-center`}>
                    {
                        links.map(link => (
                            <li key={link.to} className={`${link.to === "/auth" && 'mr-auto'} text-xl`}>
                                <Link className={`px-5 py-2 cursor-pointer text-blue-400 Dirooz hover:bg-blue-400 hover:text-white rounded-md`} to={link.to}>{link.icon} {link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
     );
}
 
export default MainHeader;