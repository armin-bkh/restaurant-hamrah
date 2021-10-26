import { deleteTable } from "../../../../Services/deleteTable";
import { getAllTable } from "../../../../Services/getAllTables";
import { numberWithCommas } from "../../../utils/CommaNumber";
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
      addToast("میز خالی شد", { appearance: "success" });
    } catch (err) {
      addToast("مجددا تلاش کنید", { appearance: "error" });
    }
  };

  return (
    <article
      className={`text-black flex flex-col justify-center bgLight boxShadow  p-5 rounded-md`}
    >
      <form className={`flex flex-col`} onSubmit={submitHandler}>
        <h1
          className={`mb-9 self-center w-24 h-24 flex justify-center items-center text-3xl
       gradient rounded-full Casablanca text-white boxShadow`}
        >
          {resForm.id}
        </h1>
        <h1 className={`mb-4 text-sm Dirooz`}>اقا/خانوم: {resForm.userName}</h1>
        <h1 className={`mb-1 text-sm Dirooz`}>سفارشات:</h1>
        <div
          className={`mb-4 flex w-full flex-wrap justify-between text-sm Dirooz`}
        >
          {resForm.foods.map((fd) => (
            <span className={`mx-2 py-2`}>{fd}</span>
          ))}
        </div>
        <h1 className={` text-sm Dirooz`}>
          مبلغ نهایی: <span className={`Casablanca`}>{totalPrice}</span> تومان
        </h1>
        <button
          className={`rounded-md cursor-pointer 
             gradient py-2 block w-full text-white
              mx-auto mt-14 font-bold Casablanca`}
          type="submit"
        >
          حذف
        </button>
      </form>
    </article>
  );
};

export default Table;
