const Table = ({ resForm }) => {
  const clickHandler = () => {
    alert(resForm.id)
  };
  return (
    <article
      onClick={clickHandler}
      className={`border-2 flex justify-center items-center mx-3 my-4 h-96`}
    >
      <h1>{resForm.id}</h1>
    </article>
  );
};

export default Table;
