import { useEffect, useState } from "react";
import { getAllTable } from "../../Services/getAllTables";
import TableLoadingSkeleton from "../LoadingSkeleton/TableLoadingSkeleton/TableLoadingSkeleton";
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
                setError(true);
            }
        }
        getTables();
    }, [])
    let returnValue = Array(8).fill().map((item, index) => <TableLoadingSkeleton key={index} />);

    if(error){
        returnValue = <h1 className={`color-gradient Text-lg lg:text-4xl`}>میز های شما خالی است</h1>
    }
    if(tables && !error){
        returnValue = tables.map((tb) => <Table setTables={setTables} key={tb.id} resForm={tb} />)
    }
    
  return (
    <main className="min-h-screen">
      <section className={`grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8 p-5`}>
        {
            returnValue
        }
      </section>
    </main>
  );
};

export default ManageTable;
