import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllTable } from "../../Services/getAllTables";
import Table from "./Table/Table";

const ManageTable = () => {
    const [tables, setTables] = useState(null);
    const [error, setError] = useState(false);
    useEffect(()=>{
        const getTables = async () =>{
            try{
                const { data } = await getAllTable();
                setTables(data);
            }
            catch(err){
                toast.error("همه ی میز ها خالی است")
                setError(true);
            }
        }
        getTables();
    }, [])
    let returnValue = <h1 className={`color-gradient text-6xl`}>در حال پردازش...</h1>;

    if(error){
        returnValue = <h1 className={`color-gradient text-6xl`}>میز های شما خالی است</h1>
    }
    if(tables && !error){
        returnValue = tables.map(tb => <Table setTables={setTables} key={tb.id} resForm={tb} />)
    }
    
  return (
    <main className="mt-14">
      <section className={`${tables ? 'grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ': 'flex justify-center items-center'}`}>
        {
            returnValue
        }
      </section>
    </main>
  );
};

export default ManageTable;
