import { useEffect, useState } from "react";
import { getInfRes } from "../../Services/getInfRes";
import ManageNavigation from "../ManageNavigation/ManageNavigation";

const ManageHeader = () => {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(null);
    
    useEffect(()=>{
        const getInfo = async () =>{
            try{
                const { data } = await getInfRes();
                setInfo(data);
                const user = JSON.parse(localStorage.getItem('restaurantUser'));
                setUser(user);
            }
            catch(err){
                setError(true);
            }
        }
        getInfo();
    }, [])

  return (  
    <header className={`flex flex-col shadow-md px-3 py-5 text bgLight boxShadow`}>
      <article className={`flex justify-between items-center mb-8`}>
        <h1 className={`text-3xl md:text-4xl xl:text-6xl Casablanca color-gradient py-5`}>رستوران {info ? info.name : null}</h1>
        <div>
        <h6 className={`text-xl font-bold text-black Dirooz mb-2`}>{user ? user.name : null}</h6>
        <h6 className={`text-sm font-bold text-black Dirooz`}>{user ? user.job : null}</h6>
          </div>
      </article>
      <h5 className={`text-sm sm:text-base md:text-lg text-black Dirooz`}>شماره پشتیبانی: <span className={`Casablanca`}>{info ? info.tel : null}</span></h5>

    <ManageNavigation />
    </header>
  );
};

export default ManageHeader;
