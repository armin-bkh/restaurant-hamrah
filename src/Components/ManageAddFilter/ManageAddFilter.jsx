import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { postFoodFilter } from '../../Services/postFoodFilter';
import { getFoodFilters } from '../../Services/getFoodFilters';
import { BiPlus } from 'react-icons/bi';
import { postUserFilter } from '../../Services/postUserFilter';
import { getUserFilters } from '../../Services/getUserFilters';

const ManageAddFilter = ({ setFilters, type }) =>{
    const [filter, setFilter] = useState({
        label: '',
        value: '',
    })
    const [error, setError] = useState(false);
    const { addToast } = useToasts();

    const changeHandler = (e) =>{
        setFilter({
            label: e.target.value,
            value: e.target.value,
        })
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        if(filter.value){
            try{
                if(type === "foods"){
                    await postFoodFilter(filter);
                    const { data } = await getFoodFilters();
                    setFilters(data);
                } else {
                    await postUserFilter(filter);
                    const {data} = await getUserFilters();
                    setFilters(data);
                }
                addToast('با موفقیت افزوده شد', { appearance: "success" })
                setFilter({
                    label: '',
                    value: '',
                })
            }
            catch(err){
                setError(true);
                addToast('مجددا تلاش کنید', { appearance: "error" })
            }
        } else addToast('نام دسته بندی را مشخص کنید', {appearance: 'error'})
    }

    return (
        <form className={`w-full flex py-4 px-4 border-b border-blue-400`} onSubmit={submitHandler}>
            <input className={`flex-grow rounded-r-md px-3 py-2 bgLight boxShadow
             outline-none Casablanca placeholder-gray-500 text-sm z-10`} placeholder="افزودن دسته بندی..." value={filter.value} onChange={changeHandler} />
            <button className={`rounded-l-md gradient text-white px-3 boxShadow z-10`} type="submit"><BiPlus/></button>
        </form>
    )
}

export default ManageAddFilter