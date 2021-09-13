import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { postFilter } from '../../Services/postFilter';
import { getAllFilters } from '../../Services/getAllFilters';
import { BiPlus } from 'react-icons/bi';

const ManageAddFilter = ({ setFilters }) =>{
    const [filter, setFilter] = useState({
        label: '',
        value: '',
    })
    const [err, setError] = useState(false);
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
                await postFilter(filter);
                const { data } = await getAllFilters();
                setFilters(data);
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
        <form className={`w-full flex py-4 px-4 border-b border-gray-200`} onSubmit={submitHandler}>
            <input className={`flex-grow rounded-r-md px-3 py-2 bgLight boxShadow
             outline-none Casablanca placeholder-gray-500 text-sm`} placeholder="افزودن دسته بندی" value={filter.value} onChange={changeHandler} />
            <button className={`rounded-l-md gradient text-white px-3`} type="submit"><BiPlus/></button>
        </form>
    )
}

export default ManageAddFilter