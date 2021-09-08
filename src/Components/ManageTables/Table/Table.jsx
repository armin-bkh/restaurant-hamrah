import { deleteTable } from "../../../Services/deleteTable";
import { getAllTable } from "../../../Services/getAllTables";
import { numberWithCommas } from "../../utils/CommaNumber";
import styles from "./Table.module.scss";
import { useToasts } from "react-toast-notifications";

const Table = ({ resForm, setTables }) => {
  const { addToast } = useToasts();

  const totalPrice = numberWithCommas(resForm.totalPrice);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await deleteTable(resForm.id);
      const { data } = await getAllTable();
      setTables(data);
      addToast('میز خالی شد', {appearance: 'success'})
    } catch (err) {
      addToast('مجددا تلاش کنید', {appearance: 'error'})
    }
  };

  return (
    <article
      className={`text-black flex flex-col justify-center bgLight boxShadow p-5 h-96 ${styles.table}`}
    >
      <form className={`flex flex-col`} onSubmit={submitHandler}>
        <h1
          className={`mb-9 self-center w-24 h-24 flex justify-center items-center text-3xl
       gradient rounded-full FPArsoo text-white`}
        >
          {resForm.id}
        </h1>
        <h1 className={`mb-4 text-sm Dirooz`}>اقا/خانوم: {resForm.userName}</h1>
        <h1 className={`mb-4 text-sm Dirooz`}>
          سفارشات:{" "}
          {resForm.foods.map((fd) => (
            <span key={fd} className={`mx-2`}>
              {fd}
            </span>
          ))}
        </h1>
        <h1 className={` text-sm Dirooz`}>مبلغ نهایی: {totalPrice()} تومان</h1>
        <button
          className={`rounded-md cursor-pointer 
             gradient py-2 block w-full text-white
              mx-auto mt-14 font-bold ANoor`}
          type="submit"
        >
          حذف
        </button>
      </form>
    </article>
  );
};

export default Table;
