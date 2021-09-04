import { useEffect } from "react";
import { toast } from "react-toastify";

const ManageTable = () => {
    useEffect(()=>{
        const getTables = async () =>{
            try{
                const { data } = await getAllTable(); 
            }
            catch(err){
                toast.error("همه ی میز ها خالی است")
            }
        }
        getTables();
    }, [])
  return (
    <main>
      <section>
        
      </section>
    </main>
  );
};

export default ManageTable;
