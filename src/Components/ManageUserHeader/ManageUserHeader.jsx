const ManageUserHeader = () => {
  return (
    <header className={`flex flex-col space-x-5 shadow-md px-3 py-5`}>
      <section className={`flex justify-between items-center mb-8`}>
        <h1 className={`text-6xl`}>رستوران هاشمی</h1>
        <h1>تعداد میز: 12</h1>
      </section>
      <h5>شماره پشتیبانی: 0000</h5>
    </header>
  );
};

export default ManageUserHeader;
