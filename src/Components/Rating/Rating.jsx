import { Rating } from "@mui/material";
import { useState } from "react";
import { useReservatioActions } from "../../Container/ReservationProvider";

const Rate = () => {
  const [range, setRange] = useState(0);
  const { remainReservation } = useReservatioActions();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(range);
  };
  return (
    <form
      onSubmit={submitHandler}
      className={`flex justify-center items-center flex-col md:w-auto p-5 z-50 boxShadow rounded-md m-5 sticky top-5 bgLight`}
    >
      <h1
        className={`color-gradient text-2xl lg:text-4xl xl:text-5xl mb-5 Casablanca`}
      >
        از سفارش خود راضی بودید؟
      </h1>
      <div dir="ltr">
        <Rating
          name="simple-controlled"
          value={range}
          onChange={(event, newRange) => {
            setRange(newRange);
          }}
        />
      </div>
      <div className={`flex w-full`}>
        <button
          onClick={remainReservation}
          type="button"
          className={`py-2 Casablanca mt-3 gradient flex-1 text-white rounded-md`}
        >
          ادامه سفارش
        </button>
        <button
          type="submit"
          className={`py-2 Casablanca mt-3 border border-red-600 flex-1 mr-3 text-red-600 rounded-md`}
        >
          ثبت و خروج
        </button>
      </div>
    </form>
  );
};

export default Rate;
