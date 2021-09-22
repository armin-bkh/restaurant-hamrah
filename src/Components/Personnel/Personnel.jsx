import { useEffect, useState } from "react";
import { deleteEmployee } from "../../Services/deleteEmployee";
import { getAllPersonnel } from "../../Services/getAllPersonnel";
import Employee from "./Employee/Employee";

const Personnel = () => {
    const [personnel, setPersonnel] = useState(null);
    const [allPersonnel, setAllPersonnel] = useState(null);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchPersonnel = async () => {
            try{
                const { data } = await getAllPersonnel();
                setPersonnel(data);
                setAllPersonnel(data);
            } catch(err){
                setError(true)
            }
        }
        fetchPersonnel();
    }, [])

    const deleteEmployeeHandler = async (id) =>{ 
        try {
            await deleteEmployee(id);
            const filteredPersonnel = personnel.filter(emp => emp.id !== id);
            setPersonnel(filteredPersonnel);
            setAllPersonnel(filteredPersonnel);
        } catch (err) {
            setError(true);
        }
    }

    return ( 
        <main className={`min-h-screen p-5`}>
                <h1 className={`color-gradient text-5xl Casablanca mb-5`}>کادر رستوران</h1>
            <section>
                {
                    personnel ? 
                    personnel.map(emp => <Employee key={emp.id} employee={emp} onDelete={() => deleteEmployeeHandler(emp.id)} />) : 
                    <h1 className={`text-blue-400`}>Loading...</h1>
                }
            </section>
        </main>
     );
}
 
export default Personnel;