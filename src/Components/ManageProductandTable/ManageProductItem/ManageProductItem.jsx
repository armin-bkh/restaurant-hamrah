import { numberWithCommas } from "../../utils/CommaNumber";
import { BiTrash, BiPencil } from "react-icons/bi";

const ManageProductItem = ({ inf, onSubmit, type }) => {
  const price = numberWithCommas(inf.price);

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(inf.id);
  };
  return (
    <li
      className={`flex text-sm lg:text-lg 2xl:text-xl justify-between items-center my-4 px-4 py-3 rounded-md boxShadow`}
    >
      <div className={`w-20 h-20`}>
        <img
          className={`w-full h-full`}
          loading="lazy"
          src={inf.img}
          alt={inf.title}
        />
      </div>
      <span>{inf.title}</span>
      <span className={`Casablanca`}>{price()}</span>
      <button
        className={`bg-blue-400 px-2 py-2 text-white rounded-full`}
        onClick={submitHandler}
      >
        {type === "edit" ? <BiPencil /> : <BiTrash />}
      </button>
    </li>
  );
};

export default ManageProductItem;
