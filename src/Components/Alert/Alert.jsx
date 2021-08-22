import { useEffect, useState } from "react";
import { useAlert } from "../Provider/ProductsProvider";
import styles from './Alert.module.scss';

const Alert = () => {
  const {message} = useAlert();
  const [timer, setTimer] = useState(10);

  useEffect(()=>{
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    return ()=>{
      clearInterval(interval);
    }
  }, [])
  let bg;
    if(message === "warning") bg = {backgroundColor: "#b0a700"};
    if(message === "error" || message === "delete") bg = {backgroundColor: "#c90000"};
    if(message === "success") bg = {backgroundColor: '#00701c'};

  return (
    <article style={bg}  className={`flex justify-between items-center text-sm md:text-lg lg:text-xl xl:text-2xl ${styles.alert}`}>
        {(message === "error") ? <p>این غذا قبلا به سبد اضافه شده است</p> : null}
        {(message === "warning") ? <p>افزایش تعداد بیش از این امکان پذیر نیست</p> : null}
        {(message === "success") ? <p>به سبد سفارشات اضافه شد</p> : null}
        {(message === "delete") ? <p>از سبد سفارشات حذف شد</p> : null}

        <span className={`rounded-full py-2 px-4 mr-4`}>{timer}</span>
    </article>
  );
};

export default Alert;
