import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import styles from './ManageFooter.module.scss';

const ManageFooter = () => {
  return (
    <footer className={`px-5 py-4 text-yellow-400 shadow-md ${styles.FPArsoo}`}>
      <p>تمامی حقوق ارتا ارتباط اطلس محفوظ است</p>
      <section>
        <nav className={`mt-4`}>
          <ul className={`flex w-full justify-evenly items-center`}>
            <li>
              <Link className={`text-red-700 text-xl cursor-pointer`} to="/manage"><FaTelegram /></Link>
            </li>
            <li>
              <Link className={`text-red-700 text-xl cursor-pointer`} to="/manage"><FaWhatsapp /></Link>
            </li>
            <li>
              <Link className={`text-red-700 text-xl cursor-pointer`} to="/manage"><FaLinkedin /></Link>
            </li>
            <li>
              <Link className={`text-red-700 ext-xl cursor-pointer`} to="/manage"><FaInstagram /></Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default ManageFooter;
