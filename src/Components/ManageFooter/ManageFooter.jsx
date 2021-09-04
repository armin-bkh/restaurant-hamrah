import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
const ManageFooter = () => {
  return (
    <footer className={`px-5 py-4 shadow-md text-white`}>
      <p>تمامی حقوق ارتا ارتباط اطلس محفوظ است</p>
      <section>
        <nav className={`mt-4`}>
          <ul className={`flex w-full justify-evenly items-center`}>
            <li>
              <Link className={`text-white text-xl cursor-pointer hover:text-red-700 transition-colors`} to="/manage"><FaTelegram /></Link>
            </li>
            <li>
              <Link className={`text-white text-xl cursor-pointer hover:text-red-700 transition-colors`} to="/manage"><FaWhatsapp /></Link>
            </li>
            <li>
              <Link className={`text-white text-xl cursor-pointer hover:text-red-700 transition-colors`} to="/manage"><FaLinkedin /></Link>
            </li>
            <li>
              <Link className={`text-white ext-xl cursor-pointer hover:text-red-700 transition-colors`} to="/manage"><FaInstagram /></Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default ManageFooter;
