import styles from './Table.module.scss';

const Table = ({ resForm }) => {
  return (
    <article
      className={`cursor-pointer text-white flex justify-center items-center mx-3 my-4 h-96 ${styles.table}`}
    >
      <h1>{resForm.id}میز شماره: </h1>
      <h1>{resForm.userName}جناب اقای/خانوم: </h1>
      <h1>{resForm.foods}سفارشات: </h1>
      <h1>{resForm.totalprice}مبلغ نهایی: </h1>
    </article>
  );
};

export default Table;
