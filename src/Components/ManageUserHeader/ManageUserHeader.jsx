import ManageUserNavigation from "../ManageUserNavigation/ManageUserNavigation"

const ManageUserHeader = () => {
  return (
    <header className={`flex flex-col space-x-5 shadow-md px-3 py-5`}>
      <section className={`flex justify-between items-center mb-8`}>
        <h1 className={`text-3xl md:text-4xl xl:text-6xl`}>رستوران هاشمی</h1>
        <h1 className={`text-sm font-bold`}>تعداد میز: <span className={`px-2 py-1 rounded-full bg-gray-900 text-white`}>14</span></h1>
      </section>
      <h5 className={`text-xs text-gray-700`}>شماره پشتیبانی: 0000</h5>

    <ManageUserNavigation />
    </header>
  );
};

export default ManageUserHeader;
