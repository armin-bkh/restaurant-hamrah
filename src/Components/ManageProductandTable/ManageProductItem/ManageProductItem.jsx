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
      className={`flex text-xs lg:text-lg 2xl:text-xl justify-between items-center my-4 px-4 py-3 rounded-md boxShadow`}
    >
      <div className={`w-16 h-16 md:w-20 md:h-20`}>
        <img
          className={`w-full h-full`}
          loading="lazy"
          src={inf.img}
          alt={inf.title}
        />
      </div>
      <span>{inf.title}</span>
      <span className={`Casablanca`}>{price}</span>
      <button
        className={`bg-blue-400 p-1.5 md:p-2 text-white rounded-full`}
        onClick={submitHandler}
      >
        {type === "edit" ? <BiPencil /> : <BiTrash />}
      </button>
    </li>
  );
};

export default ManageProductItem;
