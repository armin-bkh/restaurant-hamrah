import { deleteTable } from '../../../Services/deleteTable';
import { getAllTable } from '../../../Services/getAllTables';
import { numberWithCommas } from '../../utils/CommaNumber';
import styles from './Table.module.scss';

const Table = ({ resForm, setTables }) => {

    const totalPrice = numberWithCommas(resForm.totalPrice);
    const submitHandler = async (e) =>{
        e.preventDefault();
        try {
            await deleteTable(resForm.id)
            const { data } = await getAllTable();
            setTables(data);
        } catch (err) {
            
        }
    }
  return (
    <article
      className={`text-white flex flex-col justify-center p-5 mx-3 my-4 h-96 ${styles.table}`}
    >
    <form onSubmit={submitHandler}>
      <h1 className={`mb-9 text-center text-3xl FPArsoo`}>شماره میز: {resForm.id}</h1>
      <h1 className={`mb-4 text-sm FPArsoo`}>اقای/خانوم: {resForm.userName}</h1>
      <h1 className={`mb-4 text-sm FPArsoo`}>سفارشات: {resForm.foods.map(fd => <span className={`mx-2`}>{fd}</span>)}</h1>
      <h1 className={` text-sm FPArsoo`}>مبلغ نهایی: {totalPrice()} تومان</h1>
      <button className={`rounded-sm bg-gradient-to-r cursor-pointer 
             from-yellow-400 to-red-700 px-5 py-1 block w-full
              mx-auto mt-14 font-bold ANoor`} type="submit">حذف</button>
    </form>
    </article>
  );
};

export default Table;
