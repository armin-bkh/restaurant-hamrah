import { useEffect, useState } from "react";
import { getInfRes } from "../../Services/getInfRes";
import ManageNavigation from "../ManageNavigation/ManageNavigation";
import styles from './ManageHeader.module.scss';

const ManageHeader = () => {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
        const getInfo = async () =>{
            try{
                const { data } = await getInfRes();
                setInfo(data);
            }
            catch(err){
                setError(true);
            }
        }
        getInfo();
    }, [])

  return (  
    <header className={`flex flex-col shadow-md px-3 py-5 text bgLight boxShadow`}>
      <section className={`flex justify-between items-center mb-8`}>
        <h1 className={`text-3xl md:text-4xl xl:text-6xl Casablanca color-gradient py-5`}>رستوران {info ? info.name : null}</h1>
        <h6 className={`text-sm font-bold text-black Dirooz`}>تعداد میز: 
        <span className={`px-2 py-1 rounded-full Casablanca`}>{info ? info.tableCount : null}</span></h6>
      </section>
      <h5 className={`text-sm sm:text-base md:text-lg text-black Dirooz`}>شماره پشتیبانی: <span className={`Casablanca`}>{info ? info.tel : null}</span></h5>

    <ManageNavigation />
    </header>
  );
};

export default ManageHeader;
