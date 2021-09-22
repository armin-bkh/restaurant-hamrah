import { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../Services/deleteEmployee";
import { getAllPersonnel } from "../../Services/getAllPersonnel";
import Employee from "./Employee/Employee";
import { useToasts } from 'react-toast-notifications';


const Personnel = () => {
    const [personnel, setPersonnel] = useState(null);
    const [allPersonnel, setAllPersonnel] = useState(null);
    const [error, setError] = useState(false);
    const { addToast } = useToasts();

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
            addToast('از کادر پرسنل حذف شد', {appearance: 'success'})
        } catch (err) {
            setError(true);
            addToast('مجددا تلاش کنید', {appearance: 'error'})
        }
    }

    return ( 
        <main className={`min-h-screen p-5`}>
                <h1 className={`color-gradient text-5xl Casablanca mb-14`}>کادر رستوران</h1>
            <section className={`relative`}>
                <Link to="/manage/personnel/add-employee" className={`absolute -top-10 right-4 text-blue-400 flex items-center text-2xl Casablanca`}> <AiOutlineUserAdd className={`ml-3`} /> افزودن به کادر رستوران</Link>
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