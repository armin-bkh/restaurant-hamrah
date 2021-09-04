import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllTable } from "../../Services/getAllTables";
import Table from "./Table/Table";

const ManageTable = () => {
    const [tables, setTables] = useState(null);
    useEffect(()=>{
        const getTables = async () =>{
            try{
                const { data } = await getAllTable();
                setTables(data);
            }
            catch(err){
                toast.error("همه ی میز ها خالی است")
            }
        }
        getTables();
    }, [])
  return (
    <main>
      <section className={`grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
        {
            tables ?
            tables.map(tb => <Table key={tb.id} resForm={tb} />) :
            <h1>Loading...</h1>
        }
      </section>
    </main>
  );
};

export default ManageTable;
