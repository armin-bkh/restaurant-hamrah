import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getInfRes } from "../../Services/getInfRes";
import ManageNavigation from "../ManageNavigation/ManageNavigation";

const ManageHeader = () => {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(false);

    console.log(info);
    useEffect(()=>{
        const getInfo = async () =>{
            try{
                const { data } = await getInfRes();
                setInfo(data);
            }
            catch(err){
                toast.error("مشکلی پیش امده");
                setError(true);
            }
        }
        getInfo();
    }, [])

  return (  
    <header className={`flex flex-col shadow-md px-3 py-5 color-gradient`}>
      <section className={`flex justify-between items-center mb-8`}>
        <h1 className={`text-3xl md:text-4xl xl:text-6xl FPArsoo`}>رستوران {info ? info.name : null}</h1>
        <h6 className={`text-sm font-bold text-white FPArsoo`}>تعداد میز: 
        <span className={`px-2 py-1 rounded-full to-red-700`}>{info ? info.tableCount : null}</span></h6>
      </section>
      <h5 className={`text-white FPArsoo`}>شماره پشتیبانی: {info ? info.tel : null}</h5>

    <ManageNavigation />
    </header>
  );
};

export default ManageHeader;
